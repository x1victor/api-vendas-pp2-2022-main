import { getCustomRepository } from "typeorm"
import ProductRepository from "../typeorm/repositories/ProductRepository"

interface  IRequest{
    id:String
}

class ShowProductService{
    public async execute({id}: IRequest): Promise<product>{
        let productRepository = getCustomRepository(ProductRepository)
        let product = await productRepository.findOne(id)
    }
}