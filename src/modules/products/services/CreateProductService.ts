import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";
import AppError from '../../../errors/AppError'

// vamos criar um tipo de dados em TS com interface
interface IRequest {
    name: string;
    quantity: number;
    price: number;
}

class CreateProductService {

    // cria um método assíncrono que executa a inserção
    // método precisa promoter que irá retornar um produto
    public async execute({name, quantity, price}: IRequest): Promise<Product> {
        
        // obter o repositório de Product
        const productRepository = getCustomRepository(ProductRepository)
        // criando uma regra de negócio - consulta produtos com mesmo nome
        const productExist = await productRepository.findByName(name);
        if (productExist){
            // vamos lançar uma exceção
            throw new AppError('Já existe um produto com este nome')
        }
        // vem aqui somente se não tem produto com o nome criado
        const novo = productRepository.create({
            name, quantity, price
        })
        // EFETIVAMENTE SALVAMOS NO BD
        await productRepository.save(novo)
        return novo
    }

}

export default CreateProductService