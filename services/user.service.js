var md5 = require('md5');
var User = require("./../models/user.model")
var newUser = new User();

var loginUser = (user) => {
    return new Promise((resolve, reject) => {
        User.findOne({ isActive: 1, $or : [{ userEmail : user.userEmail },{ userName: user.userEmail }]})
        .then(userRow => {
            if (!userRow) return reject({ msg : "Invalid User"});
            if (!(userRow.userPassword == md5(user.userPassword))) return reject({ msg : "Invalid Password"});
                return resolve(userRow)
        }).catch(err => {
            return reject(err)
        })
    })
}
var createUser = (userObj) => {
    return new Promise((resolve, reject) => {
        newUser.firstName = userObj.firstName;
        newUser.lastName = userObj.lastName;
        newUser.userName = userObj.userName;
        newUser.userEmail = userObj.userEmail;
        newUser.userPassword = md5(userObj.userPassword);
        newUser.save().then(userRow => {
            return resolve(userRow)
        }).catch(err => {
            return reject(err)
        })
    })
}

var camparePassword = (password, dbPassword) => {
    return (assword == dbPassword ? true : false)
}

module.exports = {
    loginUser,
    createUser
}