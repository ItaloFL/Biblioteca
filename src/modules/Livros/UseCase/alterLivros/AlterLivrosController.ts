import { Request, Response } from "express";
import { container } from "tsyringe";
import { AlterLivrosUseCase } from "./AlterLivrosUseCase";



export class AlterLivrosController{


  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.headers
    const { titulo, foto, editora, autores } = request.body
  
    const alterLivrosUseCase = container.resolve(AlterLivrosUseCase)

    const alter = alterLivrosUseCase.execute({
      id,
      titulo,
      foto,
      editora,
      autores
    })

    return response.status(204).json(alter)
  }
}