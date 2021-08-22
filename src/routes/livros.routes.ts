import { Router } from 'express'
import { CreateLivrosController } from '../modules/Livros/UseCase/createLivros/CreateLivrosController'
import { ListLivrosController } from '../modules/Livros/UseCase/listLivros/ListLivrosController'


const livrosRoutes = Router()

const createLivrosController = new CreateLivrosController()
const listLivrosController = new ListLivrosController()


livrosRoutes.post("/obras", createLivrosController.handle)
livrosRoutes.get("/obras", listLivrosController.handle)

export {livrosRoutes }