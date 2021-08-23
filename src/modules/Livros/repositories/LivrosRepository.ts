import { getRepository, Repository } from 'typeorm'
import { idText } from 'typescript'
import { ICreateLivrosDTO } from '../dtos/ICreateLivrosDTO'
import { Livros } from '../entities/Livros'
import { ILivrosRepository } from '../repositories/interfaces/ILivrosRepository'


export class LivrosRepository implements ILivrosRepository{
  
  private repository: Repository<Livros>

  constructor(){
    this.repository = getRepository(Livros)
  }
 
  async create({ titulo, foto, editora, autores }: ICreateLivrosDTO): Promise<Livros> {
    
    const livros = this.repository.create({
      foto,
      titulo,
      editora,
      autores
    })

    await this.repository.save(livros)

    return livros
    
  }

  async findLivroByTitulo(titulo: string): Promise<Livros> {
    
    const livro = await this.repository.findOne({
      titulo
    })

    return livro
  
  }

  async list(): Promise<Livros[]> {
    return await this.repository.find()
  }

  async update({ autores, editora, foto, titulo }: ICreateLivrosDTO, id: string ): Promise<Livros> {
    
    const livros = this.repository.create({
      id: id,
      foto,
      titulo,
      editora,
      autores
    })

    await this.repository.save(livros)

    return livros
  }
  
  async findByID(id: string): Promise<Livros> {
    return await this.repository.findOne(id)
  }
  
  

}