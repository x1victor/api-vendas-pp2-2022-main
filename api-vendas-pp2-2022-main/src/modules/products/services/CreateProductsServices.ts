import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

// vamos criar um tipo de dados em TS com interface
interface IRequest{
    name: string;
    quantity: number;
    price: number;
} 

class CreateProductService {
    // cria um metodo assincrono que executa a inserção
    // metodo precisa prometer que ira retornar com o produto.
    public async  execute({name, quantity, price}: IRequest): Promise<Product>{
        //obter o repositorio de Product
        const productRepository = getCustomRepository(ProductRepository)
        // criando regra de negocios - consulta produtos com mesmo nome
        const productExist = await productRepository.findByName(name);
        if (productExist) {
            // vamos lançar uma exceção
            throw new AppError('Já existe um produto com esse nome')
        }
        // vem somente se n tem produto com nome criado
        const novo = productRepository.create({
            name, quantity, price
        })
        // EFETIVAMENTE SALVAMOS NO BD
        await productRepository.save(novo)
        return novo
    }

}

export default CreateProductService