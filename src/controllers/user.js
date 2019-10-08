const userModels = require('../models/user')
const MiscHelper = require('../helpers/helpers')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

module.exports = {
    getUser: (req, res) => {
        const search = req.query.search
        userModels.getUser(search)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    userDetail: (req, res) => {
        const id_user = req.params.id_user
        userModels.userDetail(id_user)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    updatePassword: (req, res) => {
        const id_user = req.params.id_user
        console.log(id_user)
        const salt = MiscHelper.generateSalt(18)
        const passwordHash = MiscHelper.setPassword(req.body.password, salt)
        console.log(passwordHash)
        const data = {
            password: passwordHash.passwordHash,
            salt,
            updated_at: new Date()
        }
        userModels.updatePassword(id_user, data)
            .then((resultUpdateUser) => {
                MiscHelper.response(res, resultUpdateUser, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    insertUser: (req, res) => {
        const salt = MiscHelper.generateSalt(18)
        const passwordHash = MiscHelper.setPassword(req.body.password, salt)
        const data = {
            email: req.body.email,
            password: passwordHash.passwordHash,
            fullname: req.body.fullname,
            salt: passwordHash.salt,
            token: "",
            role_id: req.body.role_id,
            created_at: new Date(),
            updated_at: new Date()
        }
        userModels.insertUser(data)
            .then((resultRegister) => {
                MiscHelper.response(res, resultRegister, 201)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    login: (req, res) => {
        const email = req.body.email
        const password = req.body.password
        userModels.getByEmail(email)
            .then((result) => {
                const dataUser = result[0]
                const usePassword = MiscHelper.setPassword(password, dataUser.salt).passwordHash
                if (usePassword === dataUser.password) {
                    dataUser.token = jwt.sign({
                        userid: dataUser.id_user
                    }, process.env.SECRET_KEY, { expiresIn: '1h' });

                    if (dataUser.role_id === 1) {
                        console.log(dataUser.role_id)
                        dataUser.token += ` ${crypto.createHmac('sha1', 'role1').digest('hex')}`
                    }

                    delete dataUser.salt
                    delete dataUser.password
                    return MiscHelper.response(res, dataUser, 200)
                } else {
                    return MiscHelper.response(res, null, 403, 'Wrong password !')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    },
}
