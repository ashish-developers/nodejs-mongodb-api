var { createUser, loginUser } = require("./../services/user.service")
var { generateAccessToken, generateRefreshToken } = require("./../utilities/common.helper")

var login = (req, res) => {
    loginUser(req.body).then(user => {
        return res.send({
            acceessToken: generateAccessToken({ email: req.body.userEmail, _id: user._id}),
            refreshToken: generateRefreshToken({ email: req.body.userEmail, _id: user._id}),
            tokenType: 'Bearer',
            userInfo: {
                userEmail: user.userEmail,
                _id: user._id
            }
        })
    }).catch(err => {
        return res.send(err)
    })
}


var register = (req, res) => {
    createUser(req.body).then(user => {
        return res.send(user)
    }).catch(err => {
        return res.send(err)
    })
}


var forgetPassword = (req, res) => {
    return res.send({ status : true})
    
}


var resetPassword = (req, res) => {
    return res.send({ status : true})
}



module.exports = {
    login, 
    register,
    forgetPassword,
    resetPassword
}