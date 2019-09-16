const auth = require('../middleware/auth');
const api = require('./api');
const web = require('./web');

const express = require('express');
const router = express.Router();

function resource (method, url, controller, call = null) {
    const Controller = require(`../app/Controllers/${controller}`);

    switch (method) {
        case 'index':
            router.get(`/${url}`, Controller.index);
            break;
        case 'show':
            router.get(`/${url}/:id`, Controller.show);
            break;
        case 'store':
            router.post(`/${url}`, Controller.store);
            break;
        case 'update':
            router.put(`/${url}/:id`, Controller.update);
            break;
        case 'destroy':
            router.delete(`/${url}/:id`, Controller.destroy);
            break;
        case 'resources':
            router.get(`/${url}`, Controller.index);
            router.get(`/${url}/:id`, Controller.show);
            router.post(`/${url}`, Controller.store);
            router.put(`/${url}/:id`, Controller.update);
            router.delete(`/${url}/:id`, Controller.destroy);
            break;
        case 'get':
            router.get(url, Controller[call]);
            break;
        case 'post':
            router.post(url, Controller[call]);
            break;
        case 'put':
            router.put(url, Controller[call]);
            break;
        case 'delete':
            router.delete(url, Controller[call]);
            break;
    }
}

let routes = [];
routes = routes.concat(api, web);

routes.forEach(e => {
    const { method, url, controller, call = null } = e;
    
    resource(method, url, controller, call);
});

module.exports = router;