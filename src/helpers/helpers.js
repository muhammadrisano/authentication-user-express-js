crypto = require('crypto');
module.exports = {

    response: (res, result, status, error, data) => {

        let resultPrint = {}
        if (!result) {
            resultPrint.error = error || null
            resultPrint.status_code = status || 200
            resultPrint.result = result
        } else if (result.affectedRows > 0) {
            if (result.insertId > 0) {
                resultPrint.status = 'Success',
                    resultPrint.status_code = status || 201,
                    resultPrint.message = "Data success created !!",
                    resultPrint.insertData = data
            } else if (result.changedRows > 0) {
                resultPrint.status = 'Success',
                    resultPrint.status_code = status || 200,
                    resultPrint.message = "Data success Updated !!",
                    resultPrint.updateDate = data
            } else {
                resultPrint.Status = 'Success',
                    resultPrint.status_code = 200,
                    resultPrint.message = "Data success Deleted !!"
            }
        } else if (result.length > 0) {
            resultPrint.error = null
            resultPrint.status_code = status || 200
            resultPrint.jumlah = data
            resultPrint.result = result

        } else {
            resultPrint.error = error || null
            resultPrint.status_code = status || 200
            resultPrint.result = result
        }
        return res.status(resultPrint.status_code).json(resultPrint)
    },
    generateSalt: (length) => {
        return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length)
    },
    setPassword: (password, salt) => {
        let hash = crypto.createHmac('sha512', salt)
        hash.update(password)
        let value = hash.digest('hex')
        return {
            salt: salt,
            passwordHash: value
        }
    },
}