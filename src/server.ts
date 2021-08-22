import express from 'express'
import 'reflect-metadata'
import { livrosRoutes } from './routes/livros.routes'
import { createConnection } from 'typeorm'
import './shared'


createConnection()

const app = express()

app.use(express.json())


app.listen(3333, () => {
  console.log("Server rodando na porta 3333")
})

app.use(livrosRoutes)
