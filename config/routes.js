const express = require('express');
const routes  = express.Router();

// CONTROLLERS
const RoleController = require('../app/Controllers/RoleController');
const UserController = require('../app/Controllers/UserController');

routes.get('/roles', RoleController.index);
routes.get('/users', UserController.index);

module.exports = routes;