import { Request, response, Response } from "express";
import CreateProductService from "../services/CreateProductsServices";

class ProductController{

    // não se trata regra de negócio aqui
    public async create(request: Request, response: Response): Promise<Response>{

        // obter os dados do navegador (usuario)
        let {name,quantity,price} = request.body
        //vamos criar objeto da classe CreateProductService
        const object = new CreateProductService()
        const newProduct = await object.execute({name, quantity, price})
        // retorna ou responder este novo produto criando em formato json
        return response.json(newProduct) 
    }
}

export default ProductController;