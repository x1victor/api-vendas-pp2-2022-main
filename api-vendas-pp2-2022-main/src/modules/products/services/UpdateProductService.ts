import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";
// cria um tipo de dado
interface IRequest{
    id:string;
    name:string;
    price:number;
    quantity:number;
    
}

class UpdateProductService {
    public async execute({ id,name, quantity, price}: IRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository)
        const productExist = await productRepository.findOne(name)
        if(!productExist){
            throw new AppError("Produto não existe",400)
        }
        // verifica se o nome alterado já existe no BD
        const nameExist = await productRepository.findOne(name)
        if (nameExist){
            throw new AppError('Nome do Produto já existe')
        }
        //vamos att
        productExist.name = name
        productExist.price = price
        productExist.quantity = quantity 
        await productRepository.save(productExist)
        return productExist;

    }

}
export default UpdateProductService