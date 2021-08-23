import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteLivrosUseCase } from "./DeleteLivrosUseCase";



export class DeleteLivrosController{

  async handle(request: Request, response: Response): Promise<Response>{

    const deleteLivrosUseCase = container.resolve(DeleteLivrosUseCase)

    await deleteLivrosUseCase.execute()

    return response.send()
  }
}