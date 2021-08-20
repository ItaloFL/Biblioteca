import { Router } from 'express'
import { CreateLivrosController } from '../modules/Livros/UseCase/CreateLivrosController'

const livrosRoutes = Router()

const createLivrosController = new CreateLivrosController()


livrosRoutes.post("/obras", createLivrosController.handle)

export {livrosRoutes }