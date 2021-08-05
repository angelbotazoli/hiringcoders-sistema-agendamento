import express from 'express'
import routes from './routes'
import './database'

class App {

    // recebe o que faremos uso da aplicacao
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    //invocar o server para trabalhar o middleware (cadeia de responsabilidades)
    middlewares() {
        // os retornos serão no formato json
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }
}

// exportar a instancia de uma classe
export default new App().server