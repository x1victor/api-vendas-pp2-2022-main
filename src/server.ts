// importa o express
// e também importa classes para tratar erro
import express, {NextFunction, Request, Response} from 'express'
// importar o arquivo de conexão com o banco de dados
import './typeorm' // acessa o arquivo index.ts

// dependência para tratar erros no express
import 'express-async-errors'

// cria o servidor
let servidor = express()
servidor.use(express.json()) 

// importa as rotas
import router from './routes'
import AppError from './errors/AppError'

servidor.use(router) // servidor vai usar nossas rotas
// converte dados da requisição para json


// vamos fazer a classe AppError tratar o erro
servidor.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        // verifica se o erro foi lançado pelo AppError
        if (error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }
        // erro não foi gerado pelo AppError
        console.log(error)
        return response.status(500).json({
            status: 'error',
            message: "erro interno do servidor"
        })
    }
)
// coloca o servidor para escutar na porta 3333 e aguardar as requisições
servidor.listen(3333, () => {
    console.log('Servidor iniciado')
})