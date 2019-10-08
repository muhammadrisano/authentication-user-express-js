const express = require('express');
const Route = express.Router();
const roleController = require('../controllers/role')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', roleController.getRole)
    .post('/', roleController.insertRole)
    .patch('/:id_role', roleController.updateRole)
    .delete('/:id_role', roleController.deleteRole)

module.exports = Route;