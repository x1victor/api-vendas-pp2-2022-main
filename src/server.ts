// importa o express
import express from 'express'
// importar o arquivo de conexão com o banco de dados
import './typeorm' // acessa o arquivo index.ts
// cria o servidor
let servidor = express()

// converte dados da requisição para json
servidor.use(express.json()) 
// importa as rotas
import router from './routes'


servidor.use(router) // servidor vai usar nossas rotas

// coloca o servidor para escutar na porta 3333 e aguardar as requisições
servidor.listen(3333, () => {
    console.log('Servidor iniciado')
})