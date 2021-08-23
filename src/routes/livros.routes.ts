import { Router } from 'express'
import { AlterLivrosController } from '../modules/Livros/UseCase/alterLivros/AlterLivrosController'
import { CreateLivrosController } from '../modules/Livros/UseCase/createLivros/CreateLivrosController'
import { ListLivrosController } from '../modules/Livros/UseCase/listLivros/ListLivrosController'


const livrosRoutes = Router()

const createLivrosController = new CreateLivrosController()
const listLivrosController = new ListLivrosController()
const alterLivrosController = new AlterLivrosController()


livrosRoutes.post("/obras", createLivrosController.handle)
livrosRoutes.get("/obras", listLivrosController.handle)
livrosRoutes.put("/obras/:id", alterLivrosController.handle)

export {livrosRoutes }