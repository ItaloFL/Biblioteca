import { inject, injectable } from "tsyringe";
import { Livros } from "../../entities/Livros";
import { LivrosRepository } from "../../repositories/LivrosRepository";

@injectable()
export class ListLivrosUseCase{

  constructor(
    @inject("LivrosRepository")
    private livrosRepository: LivrosRepository
  ){}

  async execute(): Promise<Livros[]>{

    const livros = await this.livrosRepository.list()

    return livros
  }
}