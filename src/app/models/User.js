import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

//as models sao usadas na camada logica para acessar as informacoes do bd e retorna via api rest
class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL, //só vai existir na model, nao vai ser salvo no banco
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN
        },
            {
                sequelize, //referencia o init
                // tableName: 'users'
            })

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10)
            }
        })

        return this
    }
}

export default User
