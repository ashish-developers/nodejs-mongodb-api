var md5 = require('md5');
var File = require("./../models/file.model")
var DirModel = require("./../models/file.model");
const { Dir } = require('fs');

var newFile = new File();
var newDir = new Dir();

var makeDir = async () => {
    newDir.dirName = "Apple";
    newDir.save(newDir).then(userRow => {
        return (userRow)
    }).catch(error => {
        return (error)
    })
}

// const createFileOne = (fileData) => {
//     await newFile.
// } 

var getFileOne = async (condition) => {
    return await File.findOne();
}

var getFiles = async (condition) => {
    return await File.find();
}



module.exports = {
    getFileOne,
    getFiles,
    makeDir
}