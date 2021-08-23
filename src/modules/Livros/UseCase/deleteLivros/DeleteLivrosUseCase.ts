import { inject, injectable } from "tsyringe";
import { ILivrosRepository } from "../../repositories/interfaces/ILivrosRepository";


@injectable()
export class DeleteLivrosUseCase{

  constructor(
    @inject("LivrosRepository")
    private livrosRepository: ILivrosRepository
  ){}

  async execute(id: string | string[]){
  
    const verifyIfLivroExist = await this.livrosRepository.findByID(id)

    if(!verifyIfLivroExist){
      throw new Error("Livro não encontrado, verifique os dados e tente novamente!")
    }

    await this.livrosRepository.delete(id)

  }
}