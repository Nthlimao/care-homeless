const User = require('../Models/User');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },
    async show(req, res) {
        const user = await User.findById(req.params.id);

        return res.json(user);
    },
    async store(req, res) {
        const { email } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'User already exists' });
        }

        try {
            const user = await User.create(req.body);
            user.password = undefined;

            return res.json(user);
            
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },
}