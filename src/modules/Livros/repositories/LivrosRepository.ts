import { getRepository, Repository } from 'typeorm'
import { ICreateLivrosDTO } from '../dtos/ICreateLivrosDTO'
import { Livros } from '../entities/Livros'
import { ILivrosRepository } from '../repositories/interfaces/ILivrosRepository'


export class LivrosRepository implements ILivrosRepository{
  
  private repository: Repository<Livros>

  constructor(){
    this.repository = getRepository(Livros)
  }
  
  async create({ id, titulo, foto, editora, autores }: ICreateLivrosDTO): Promise<void> {
    
    const livros = this.repository.create({
      id,
      titulo,
      foto,
      editora,
      autores
    })

    this.repository.save(livros)
    
  }

  async findLivroByTitulo(titulo: string): Promise<Livros> {
    
    const livro = this.repository.findOne({
      titulo
    })

    return livro
  
  }



}