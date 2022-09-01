import { getCustomRepository } from "typeorm"
import AppError from "../../../errors/AppError"
import ProductRepository from "../typeorm/repositories/ProductRepository"

class DeleteProductService{
    public async execute(id: string){
        const productRepository = getCustomRepository(ProductRepository)
        const productExist = await productRepository.findOne(id)
        if(!productExist){
            throw new AppError('produto não existe',400)
        }
        await productRepository.remove(productExist)
    }

}

export default DeleteProductService