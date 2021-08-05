import Sequelize, { Model } from 'sequelize'

//as models sao usadas na camada logica para acessar as informacoes do bd e retorna via api rest
class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN
        },
            {
                sequelize, //referencia o init
                // tableName: 'users'
            })
    }
}

export default User
