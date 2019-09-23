const Role = require('../../app/Models/Role');

module.exports = {
	async seed() {
		const role = await Role.create({
			'title': 'ADMIN'
		});	

		const role = await Role.create({
			'title': 'VOLUNTEER'
		});
	}
}