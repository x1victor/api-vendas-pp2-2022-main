import { Request, Response } from "express"
import CreateUserService from "../services/CreateUserService"
import ListUserService from "../services/ListUserService"


class UserController {
     // não se trata regra de negócio aqui
     public async create(request: Request, response: Response ): Promise<Response>{

        // obter os dados do navegador (usuário)
        console.log(request.body)
        let {name, email, password} = request.body
       
        // vamos criar objeto da classe CreateProductService
        const object = new CreateUserService()
        console.log(`Passou 1`)
        const newUser = await object.execute({name, email, password})
        console.log(`Passou 2`)
        // retorna ou responder este novo produto criado em formato json
        return response.json(newUser)
    }

    public async list(request: Request, response: Response ): Promise<Response> {
        let listService = new ListUserService()
        let users = await listService.execute()
        return response.json(users)
    }
}

export default UserController