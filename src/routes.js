import { Router } from 'express'
import User from './app/models/User'

// instanciando a rota
const routes = new Router()

// invocar o router
// estamos tratando um bd entao por padrao deve se usar o metodo assincrono (salva e aguarda retorno)
routes.get('/', async (req, res) => {// rota principal
    //forcando uma gravacao no bd
    const user = await User.create({
        name: 'Angelica',
        email: 'angel@email.com',
        password_hash: '123456'
    })

    return res.json(user)
})

// exportar o router para poder consumir ele no arquivo app.js
export default routes
