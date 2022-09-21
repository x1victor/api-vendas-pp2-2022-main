import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import Product from "../typeorm/entities/Product"
import ProductRepository from "../typeorm/repositories/ProductRepository"

//cria um tipo de dado
interface IRequest {
    id: string
    name: string
    price: number
    quantity: number
}

class UpdateProductService {

    public async execute({id, name, price, quantity}: IRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository)
        // verifica se o produto existe
        const productExist = await productRepository.findOne(id)
        if (!productExist){
            // sai do método
            throw new AppError('Produto não existe', 400)
        }
        // verifica se o nome alterado já existe no BD
        const nameExist = await productRepository.findByName(name)
        if (nameExist){
            // sai do método
            throw new AppError('Nome do Produto já existe', 400)
        }
        // vamos atualizar
        productExist.name = name
        productExist.price = price
        productExist.quantity = quantity
        await productRepository.save(productExist)
        return productExist
    }
}

export default UpdateProductService