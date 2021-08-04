import { Router } from 'express'

// instanciando a rota
const routes = new Router()

// invocar o router
routes.get('/', (req, res) => {// rota principal
    return res.json({ message: 'ok' })
})

// exportar o router para poder consumir ele no arquivo app.js
export default routes
