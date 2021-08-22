import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLivrosUseCase } from "./ListLivrosUseCase";



export class ListLivrosController{

  async handle(request: Request, response: Response): Promise<Response>{

    const listLivrosUseCase = container.resolve(ListLivrosUseCase)

    const livros = await listLivrosUseCase.execute()

    return response.status(200).json(livros)
  }
}