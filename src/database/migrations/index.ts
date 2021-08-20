import { createConnection } from 'typeorm'


createConnection().then( async () => {
  console.log('Conectado ao banco de dados')
})