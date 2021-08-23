import { inject, injectable } from "tsyringe";
import { ICreateLivrosDTO } from "../../dtos/ICreateLivrosDTO";
import { ILivrosRepository } from "../../repositories/interfaces/ILivrosRepository";


@injectable()
export class AlterLivrosUseCase{

  constructor(
    @inject("LivrosRepository")
    private livrosRepository: ILivrosRepository
  ){}

  async execute( data: ICreateLivrosDTO, id: string | string[]): Promise<void>{

    const verifyIfLivroAlreadyExist = await this.livrosRepository.findByID(id)

    if(!verifyIfLivroAlreadyExist){
      throw new Error("Livro não encontrado, verifique os dados e tente novamente!")
    }

    await this.livrosRepository.update(data)
    
  }
}