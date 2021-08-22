import { PrimaryColumn, Entity, Column } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity("createLivros")
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

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}


export { Livros }