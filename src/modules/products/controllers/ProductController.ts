import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";

class ProductController {

    // não se trata regra de negócio aqui
    public async create(request: Request, response: Response ): Promise<Response>{

        // obter os dados do navegador (usuário)
        let {name, quantity, price} = request.body
        // vamos criar objeto da classe CreateProductService
        const object = new CreateProductService()
        const newProduct = await object.execute({name, quantity, price})
        // retorna ou responder este novo produto criado em formato json
        return response.json(newProduct)
    }

    public async list(request: Request, response: Response ): Promise<Response> {
        let listService = new ListProductService()
        let products = await listService.execute()
        return response.json(products)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        // recupera id do produto
        const {id} = request.params
        const showProductService = new ShowProductService()
        const product = await showProductService.execute({id})
        return response.json(product) // retorna o produto selecionado

    }
    
    public async delete(request: Request, response: Response): Promise<Response> {
        // recupera id do produto
        const {id} = request.params
        const deleteProductService = new DeleteProductService()
        await deleteProductService.execute(id)
        return response.json([])
    }

    public async update(request: Request, response: Response): Promise<Response> {
        // recupera id, name, price, quantity do produto
        const {id} = request.params
        const {name, quantity, price} = request.body
        const updateProductService = new UpdateProductService()
        const productUpdated = await 
            updateProductService.execute({id, name, price, quantity})
        return response.json(productUpdated)
    }

}

export default ProductController