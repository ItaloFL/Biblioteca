import { ICreateLivrosDTO } from "../dtos/ICreateLivrosDTO";

import { inject, injectable } from 'tsyringe'
import { ILivrosRepository } from "../repositories/interfaces/ILivrosRepository";
import { Livros } from "../entities/Livros";


@injectable()
class CreateLivrosUseCase{

  constructor(
    @inject("LivrosRepository")
    private livrosRepository: ILivrosRepository
  ){}

  async execute({ id, titulo, foto, editora, autores }: ICreateLivrosDTO): Promise<Livros>{

    const VerifyIfLivroAlreadyExist = await this.livrosRepository.findLivroByTitulo(titulo)

    if(VerifyIfLivroAlreadyExist){
      throw new Error("O Livro já existe, verifique novamente seu titulo!")
    }

    const livro = this.livrosRepository.create({
      id,
      titulo,
      foto,
      editora,
      autores
    })

    return livro
  }


}

export { CreateLivrosUseCase }