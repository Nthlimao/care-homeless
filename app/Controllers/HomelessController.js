const Homeless = require('../Models/Homeless');

module.exports = {
    async index(req, res) {
        const homeless = await Homeless.find();

        return res.json(homeless);
    },
    async show(req, res) {
        const homeless = await Homeless.findById(req.params.id);

        return res.json(homeless);
    },
    async store(req, res) {
        const homeless = await Homeless.create(req.body);

        return res.json(homeless);
    },
    async update(req, res) {
        const homeless = await Homeless.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(homeless);
    },
    async destroy(req, res) {
        await Homeless.findByIdAndRemove(req.params.id);

        return res.send();
    }
}