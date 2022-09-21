import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";
import AppError from '../../../errors/AppError'
import { hash } from "bcryptjs";

// vamos criar um tipo de dados em TS com interface
interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    // cria um método assíncrono que executa a inserção
    // método precisa promoter que irá retornar um produto
    public async execute({name, email, password}: IRequest): Promise<User> {
       
        // obter o repositório de Product
        const userRepository = getCustomRepository(UserRepository)
        
        // criando uma regra de negócio - consulta usuários com email
        const userExist = await userRepository.findByEmail(email);
        
        if (userExist){
            // vamos lançar uma exceção
            throw new AppError('Já existe um usuários com este email')
        }
        let senhaCriptografada = await hash(password, 10)
        // vem aqui somente se não tem produto com o nome criado
        const novo = userRepository.create({
            name, 
            email, 
            password: senhaCriptografada
        })
        // EFETIVAMENTE SALVAMOS NO BD
        await userRepository.save(novo)
        return novo
    }

}

export default CreateUserService