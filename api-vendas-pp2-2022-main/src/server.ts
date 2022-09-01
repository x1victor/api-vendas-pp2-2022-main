// importa o express
// e também importa classes para tratar erro
import express,{NextFunction,Request,Response} from 'express'
// importar o arquivo de conexão com o banco de dados
import './typeorm' // acessa o arquivo index.ts
// dependência para tratar erros no express
import 'express-async-errors'

// cria o servidor
let servidor = express()

// converte dados da requisição para json
servidor.use(express.json()) 
// importa as rotas
import router from './routes'
import AppError from './errors/AppError'


servidor.use(router) // servidor vai usar nossas rotas
//vamos fazer a classe AppError tratar o error
servidor.use(
    (error:Error, request:Request, response:Response, next:NextFunction)=>{
        // verifica se o erro foi lançado pelo AppError
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                massage: error.message
            }) 
        }
        //erro nao foi gerado pelo AppError
        return response.status(500).json({
            status: 'error',
            message: 'Erro interno do servidor'
        })
    }
)

// coloca o servidor para escutar na porta 3333 e aguardar as requisições
servidor.listen(3333, () => {
    console.log('Servidor iniciado')
})