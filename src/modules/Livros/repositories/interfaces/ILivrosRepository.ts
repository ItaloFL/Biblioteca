import { ICreateLivrosDTO } from "../../dtos/ICreateLivrosDTO";
import { Livros } from "../../entities/Livros";



export interface ILivrosRepository{

  create({id, titulo, foto, editora, autores }: ICreateLivrosDTO): Promise<Livros>
  findLivroByTitulo(titulo: string): Promise<Livros>
  list(): Promise<Livros[]>
  update(data: ICreateLivrosDTO): Promise<Livros>
  findByID(id: string | string[]): Promise<Livros>
  delete(id: string | string[]): Promise<void>


}