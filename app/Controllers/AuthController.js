const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (params = {}) => { 
    return jwt.sign(params, process.env.SECRET_JWT, { expiresIn: 86400 });
}

module.exports = {
    async login (req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if(!user) {
            return res.status(400).send({ erro: 'User not found' });
        }

        if(!await bcrypt.compare(password, user.password))
            return res(400).send({ error: 'Invalid password' });

        user.password = undefined;
        
        return res.send({ 
            user, 
            token: generateToken({ id: user.id })
        });
    },
    async register (req, res) {
        const { email } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'User already exists' });
        }

        try {
            const user = await User.create(req.body);
            user.password = undefined;

            return res.send({ 
                user, 
                token: generateToken({ id: user.id })
            });
            
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },
}