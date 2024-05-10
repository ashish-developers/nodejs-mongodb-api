var { createUser, loginUser, getUserOne } = require("./../services/user.service")
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
    }).catch(error => {
        return res.send(error)
    })
}


var register = (req, res) => {
    createUser(req.body).then(user => {
        return res.send(user)
    }).catch(error => {
        return res.send(error)
    })
}


var forgetPassword = (req, res) => {
    getUserOne({ userEmail : req.body.userEmail}).then(outPut => {
        if (outPut) return res.send({ status : true, msg : 'Forget password link has been send to your email.'})
        else return res.send({ status : true, msg : 'This user not found.'})
    }).catch(error=>{
        return res.send(error)
    })
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