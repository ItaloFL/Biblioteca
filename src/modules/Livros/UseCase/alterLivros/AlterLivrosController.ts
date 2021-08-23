import { Request, Response } from "express";
import { container } from "tsyringe";
import { AlterLivrosUseCase } from "./AlterLivrosUseCase";



export class AlterLivrosController{


  async handle(request: Request, response: Response): Promise<Response>{

    const { id } = request.headers
    const { data } = request.body
  
    const alterLivrosUseCase = container.resolve(AlterLivrosUseCase)

    const alter = await alterLivrosUseCase.execute(data, id)

    return response.status(200).json(alter)
  }
}