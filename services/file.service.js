var md5 = require('md5');
var File = require("./../models/file.model")
var Project = require("./../models/project.model");
const { Promise } = require('mongoose');
const { resolve } = require('path');
// const { Dir } = require('fs');

var newFile = new File();
var newDir = new Project();

var makeDir = async (dirData) => {

        dirParam = new Project();
        dirParam.dirName= 'Unknown1'
        dirParam.dirType= null
        dirParam.dirSharedWith= []
        dirParam.dirPassword= null
        dirParam.isActive= 0
        return await dirParam.save();
    
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