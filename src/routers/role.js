const express = require('express');
const Route = express.Router();
const roleController = require('../controllers/role')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', roleController.getRole)
    .post('/', roleController.insertRole)
    .patch('/:role_id', roleController.updateRole)
    .delete('/:role_id', roleController.deleteRole)

module.exports = Route;