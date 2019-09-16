const prefix = 'api';

const api = [
    { 'method': 'resources', 'url': `${prefix}/roles`, 'controller': 'RoleController' },
    { 'method': 'resources', 'url': `${prefix}/homeless`, 'controller': 'HomelessController' },
];

module.exports = api;