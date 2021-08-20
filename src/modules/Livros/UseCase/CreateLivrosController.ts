import { Request, Response } from "express";
import { container } from "tsyringe";
import { Livros } from "../entities/Livros";
import { CreateLivrosUseCase } from "./CreateLivrosUseCase";

class CreateLivrosController{

  async handle(request: Request, response: Response): Promise<Livros>{

    const { titulo, editora, foto, autores } = request.body    

    const createLivrosUseCase = container.resolve(CreateLivrosUseCase)

    const livro = await createLivrosUseCase.execute({
      titulo,
      editora,
      foto,
      autores
    })

    return livro
  }


}

export { CreateLivrosController }