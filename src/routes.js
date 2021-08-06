import { Router } from 'express'
import UserController from './app/controllers/UserController'

// instanciando a rota
const routes = new Router()

//recebe as informacoes e salva no bd
routes.post('/users', UserController.store)

// exportar o router para poder consumir ele no arquivo app.js
export default routes
