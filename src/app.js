const express = require('express')
const routes = require('./router')

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
module.exports = new App().server