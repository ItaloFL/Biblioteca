import { container } from "tsyringe";
import { ILivrosRepository } from "../modules/Livros/repositories/interfaces/ILivrosRepository";
import { LivrosRepository } from "../modules/Livros/repositories/LivrosRepository";



container.registerSingleton<ILivrosRepository>(
  "LivrosRepository",
  LivrosRepository
)