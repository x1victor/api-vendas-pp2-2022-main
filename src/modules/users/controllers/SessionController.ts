import {Request, Response} from 'express'
import CreateSessionService from '../services/CreateSessionService'

class SessionController {
    public async create(request: Request, response: Response): Promise<Response> {
        // cria um objeto de serviço de sessão
        const createSessionService = new CreateSessionService()
        // recupera os dados do usuário
        console.log(request.body.email)
        console.log(request.body.password)
        const {email, password} = request.body

        const user = await createSessionService.execute({
            email, password
        })

        return response.json(user)

    }
}
export default SessionController