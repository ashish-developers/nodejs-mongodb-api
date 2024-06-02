var FileModel = require("./../models/file.model")
//var FileService = require("./../services/file.service")
//const imgToPDF = require('image-to-pdf')
const fs = require('fs');

//imageToPDFConverter = ()


const onBoard = async (req, res) => {
    //   const pages = [
    //       fs.readFileSync('public/files/512x512-png-images-3.png')
    //   ]
    //   imgToPDF(pages, imgToPDF.sizes.A4).pipe(fs.createWriteStream('public/files/512x512-png-images-3.pdf'))
    //   return false;

    // var newFile = new FileModel();
    // newFile.fileTitle = "test2"
    // newFile.fileSize = 'hh'
    // newFile.fileType = 'test'
    // newFile.fileRevisions = [{test:1}]
    // newFile.fileOwner = "663df403c3a759b0d8766da0"
    // let d = await newFile.save();
    // console.log(d)
    return res.send({status : true})
}

const mkDir = () => {
    
}

module.exports = {
    onBoard
}