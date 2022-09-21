import { Router } from "express";
import { request } from "http";
import UserController from "../controllers/UserController";

// cria objeto para a rota
const routerUser = Router()
// cria um objeto controller
const controllerUser = new UserController()

// está criada a rota para inserir um produto no banco de dados
routerUser.post('/', controllerUser.create)

routerUser.post('/teste', function() {
    return request;
})

routerUser.get('/', controllerUser.list)

export default routerUser