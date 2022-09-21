import { Router } from "express";
import router from "../../../routes";
import ProductController from "../controllers/ProductController";
import isAuthenticated from '../../../middleware/isAuthenticated'

// cria objeto para a rota
const routerProduct = Router()
// cria um objeto controller
const controllerProduct = new ProductController()

// está criada a rota para inserir um produto no banco de dados
routerProduct.post('/', controllerProduct.create)

routerProduct.get('/', 
    isAuthenticated, 
    controllerProduct.list)

routerProduct.get('/:id', controllerProduct.show)

routerProduct.delete('/:id', controllerProduct.delete)

routerProduct.put('/:id', controllerProduct.update)

export default routerProduct