

import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { ICreateLivrosDTO } from '../../dtos/ICreateLivrosDTO'
import { Livros } from '../../entities/Livros'
import { ILivrosRepository } from '../../repositories/interfaces/ILivrosRepository'




@injectable()
export class CreateLivrosUseCase{

  constructor(
    @inject("LivrosRepository")
    private livrosRepository: ILivrosRepository
  ){}

  async execute({ titulo, foto, editora, autores }: ICreateLivrosDTO): Promise<void>{

    const VerifyIfLivroAlreadyExist = await this.livrosRepository.findLivroByTitulo(titulo)

    if(VerifyIfLivroAlreadyExist){
      throw new AppError("O Livro já existe, verifique novamente seu titulo!")
    }

    await this.livrosRepository.create({
      titulo,
      foto,
      editora,
      autores
    })
  }


}