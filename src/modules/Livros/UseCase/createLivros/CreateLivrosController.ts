import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLivrosUseCase } from "./CreateLivrosUseCase";

class CreateLivrosController{

  async handle(request: Request, response: Response): Promise<Response>{

    const { titulo, editora, foto, autores } = request.body    

    const createLivrosUseCase = container.resolve(CreateLivrosUseCase)

    const livro = await createLivrosUseCase.execute({
      titulo,
      editora,
      foto,
      autores
    })

    return response.status(201).json(livro)
  }


}

export { CreateLivrosController }