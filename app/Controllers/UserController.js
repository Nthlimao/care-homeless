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
        const user = await User.create(req.body);

        return res.json(user);
    },
}