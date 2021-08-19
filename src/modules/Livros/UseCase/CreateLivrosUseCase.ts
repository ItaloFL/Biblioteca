import { ICreateLivrosDTO } from "../dtos/ICreateLivrosDTO";

import { inject, injectable } from 'tsyringe'
import { ILivrosRepository } from "../repositories/interfaces/ILivrosRepository";


@injectable()
class CreateLivrosUseCase{

  constructor(
    @inject("LivrosRepository")
    private livrosRepository: ILivrosRepository
  ){}

  async execute({ id, titulo, foto, editora, autores }: ICreateLivrosDTO): Promise<void>{

    const VerifyIfLivroAlreadyExist = this.livrosRepository.findLivroByTitulo(titulo)

    if(VerifyIfLivroAlreadyExist){
      throw new Error("O Livro já existe, verifique novamente seu titulo!")
    }

    this.livrosRepository.create({
      id,
      titulo,
      foto,
      editora,
      autores
    })



  }


}

export { CreateLivrosUseCase }