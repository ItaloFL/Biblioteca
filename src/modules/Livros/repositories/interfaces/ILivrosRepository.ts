import { ICreateLivrosDTO } from "../../dtos/ICreateLivrosDTO";
import { Livros } from "../../entities/Livros";



export interface ILivrosRepository{

  create({id, titulo, foto, editora, autores }: ICreateLivrosDTO): Promise<Livros>
  findLivroByTitulo(titulo: string): Promise<Livros>
  list(): Promise<Livros[]>
  update({ autores, editora, foto, titulo}: ICreateLivrosDTO, id: string): Promise<Livros>
  findByID(id: string | string[]): Promise<Livros>


}