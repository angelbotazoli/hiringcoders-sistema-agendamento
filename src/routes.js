import { Router } from 'express'
import UserController from './app/controllers/UserController'
import SesseionController from './app/controllers/SessionController'

// instanciando a rota
const routes = new Router()

//recebe as informacoes e salva no bd
routes.post('/users', UserController.store)

routes.post('/session', SesseionController.store)

// exportar o router para poder consumir ele no arquivo app.js
export default routes
