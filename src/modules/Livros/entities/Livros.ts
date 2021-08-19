import { PrimaryColumn, Entity, Column } from 'typeorm'

@Entity()
class Livros{

  @PrimaryColumn()
  id?: string

  @Column()
  titulo: string
  
  @Column()
  editora: string

  @Column()
  foto: string

  @Column()
  autores: string 

}

export { Livros }