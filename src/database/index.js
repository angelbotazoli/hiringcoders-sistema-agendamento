//conectar o User

import Sequelize from 'sequelize'
import User from '../app/models/User'
import databaseCofig from '../config/database' //conexoes com o banco

const models = [User]

class Database {
    constructor() {
        this.init()
    }

    //conexao com o bd
    init() {
        this.connection = new Sequelize(databaseCofig);
        models.map(model => model.init(this.connection))
    }
}

export default new Database()