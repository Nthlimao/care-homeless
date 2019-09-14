const Role = require('../Models/Role');

module.exports = {
    async index(req, res) {
        const roles = await Role.find();

        return res.json(roles);
    },
}