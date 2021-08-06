import User from '../models/User'
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

class SessionController {
    async store(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) {
            return res.status(401).json({
                error: 'usuario não encontrado'
            })
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({
                error: 'senha invalida'
            })
        }

        const { id, name } = user

        return res.json({
            user: {
                id,
                name,
                email
            },
            //isolar o token por questao de seguranca
            // token: jwt.sign({ id }, '11d1090cb5ac685df62b268e3b60328e', {
            //     expiresIn: '1h'
            // })
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        })
    }
}

export default new SessionController()