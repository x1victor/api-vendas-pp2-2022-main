import { Router } from "express";
import ProductController from "../controllers/ProductController";


// cria objeto para a rota
const routerProduct = Router()
// cria um objeto controller
const controllerProduct = new ProductController()

// está criada a rota para inserir um produto no banco de dados
routerProduct.post('/', controllerProduct.create)

export default routerProduct