//cria objeto para a rota

import { Router } from "express"
import ProductController from "../controllers/ProductController"

const routerProduct = Router()
//cria um objeto controller
const controllerProduct = new ProductController()
// esta criando a rota para inserir um produto no BD
routerProduct.post('/', controllerProduct.create)

export default routerProduct