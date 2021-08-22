import { Request, Response } from "express";
import { container } from "tsyringe";
import { AlterLivrosUseCase } from "./AlterLivrosUseCase";



export class AlterLivrosController{


  async handle(request: Request, response: Response): Promise<Response>{

    const alterLivrosUseCase = container.resolve(AlterLivrosUseCase)

    const alter = alterLivrosUseCase.execute()

    return response.send()
  }
}