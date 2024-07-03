

const { getSocketInstance } = require('./../utilities/socket.setting');
const { makeDir } = require("../services/file.service");
const io = getSocketInstance();

const mkDir = (req, res) => {
    makeDir(req.body).then(projectRow => {
        res.send({ status : true, data : projectRow})
    }).catch(error => {
        res.send({ status : false, error : error.message})
    })
}


module.exports = {
    mkDir
}