const Role = require('../Models/Role');

module.exports = {
    async index(req, res) {
        const roles = await Role.find();

        return res.json(roles);
    },
    async show(req, res) {
        const role = await Role.findById(req.params.id);

        return res.json(role);
    },
    async store(req, res) {
        const role = await Role.create(req.body);

        return res.json(role);
    },
    async update(req, res) {
        const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(role);
    },
    async destroy(req, res) {
        await Role.findByIdAndRemove(req.params.id);

        return res.send();
    }
}