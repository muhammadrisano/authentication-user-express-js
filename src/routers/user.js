const express = require('express');
const Route = express.Router();
const userController = require('../controllers/user')
const Auth = require('../helpers/auth')


Route
    .all('/*', Auth.authInfo)
    .get('/', Auth.accesstoken, userController.getUser)
    .get('/:id_user', Auth.accesstoken, userController.userDetail)
    .patch('/updatepassword/:id_user', Auth.accesstoken, userController.updatePassword)
    .patch('/:id_user', Auth.accesstoken, userController.updateProfile)
    .post('/insert', Auth.accesstoken, Auth.authadmin, userController.insertUser)
    .post('/login', userController.login)
    .delete('/:id_user', Auth.accesstoken, Auth.authadmin, userController.deleteUser)

module.exports = Route;