import User from '../models/User'

class UserController {
    async store(req, res) { //só pode existir um store por classe

        const userExists = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (userExists) {
            return res.status(400).json({
                error: 'usuario já cadastrado'
            })
        }

        const { id, name, email, provider } = await User.create(req.body)

        return res.json({
            id,
            name,
            email,
            provider
        })
    }
}

export default new UserController()