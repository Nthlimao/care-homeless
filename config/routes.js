const express = require('express');
const routes  = express.Router();

// CONTROLLERS
const RoleController = require('../app/Controllers/RoleController');
const UserController = require('../app/Controllers/UserController');

// ROLE
routes.get('/roles', RoleController.index);
routes.get('/roles/:id', RoleController.show);
routes.post('/roles', RoleController.store);
routes.put('/roles/:id', RoleController.update);
routes.delete('/roles/:id', RoleController.destroy);

// USER
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);

module.exports = routes;