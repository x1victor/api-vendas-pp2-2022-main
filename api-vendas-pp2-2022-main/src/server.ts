// importa o express
import express, { Router } from 'express'
// importar o arquivo de conexão com o banco de dados
import './typeorm' // acessa o arquivo index.ts
// cria o servidor
let servidor = express()

// criando uma rota com o verbo get
servidor.get('/', function (req, res) {
    res.send('A aula acabou')
})

servidor.use(Router) // servidor vai usar nossas rotas

// coloca o servidor para escutar na porta 3333 e aguardar as requisições
servidor.listen(3333, () => {
    console.log('Servidor iniciado')
})