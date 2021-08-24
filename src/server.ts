import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import 'reflect-metadata'
import { livrosRoutes } from './routes/livros.routes'
import { createConnection } from 'typeorm'
import './shared'
import swaggerUi from 'swagger-ui-express'

import swaggerDocs from './swagger.json'
import { AppError } from './shared/errors/AppError'


createConnection()

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal error server ${err.message}`
  })
})

app.listen(3333, () => {
  console.log("Server rodando na porta 3333")
})


app.use(livrosRoutes)
