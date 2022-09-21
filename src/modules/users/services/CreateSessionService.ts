import { getCustomRepository } from "typeorm";
import AppError from "../../../errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

// cria um tipo de dados para requisição
interface IRequest {
    email: string;
    password: string;
}
// cria um tipo de dados para resposta
interface IResponse {
    user: User;
    token: string;
}
class CreateSessionService {
    
    public async execute({email, password}: IRequest): Promise<IResponse>{
        // checar se a email e senha são válidos
        const userRepository = getCustomRepository(UserRepository)
        // verifica se o email existe
        const user = await userRepository.findByEmail(email)
        if (!user){
            throw new AppError('Usuário/Senha inválido', 401);
        }
        // verifica se a senha confere
        // 123 == $2a$08$10jgp6Rdu1SY7/K3jlib8.hglcmmrXPnE0.E7jzVlvqPlEyrQIzK6
        const senhaConfirmada = await compare(password, user.password)
        if (!senhaConfirmada){
            throw new AppError('Usuário/Senha inválido', 401);
        }
        // vamos gerar o token para o usuário
        // chave privada - abababacaacacabaanadafagah
        
        const token = sign({}, 'abababacaacacabaanadafagah', {
            subject: user.id, // quem recebe o token
            expiresIn: '1d' // prazo de validade
        })

        return {
            user, // usuário que recebeu o token
            token // token
        }
    }
}

export default CreateSessionService