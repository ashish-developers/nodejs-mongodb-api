const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:6AGtwpOlgkJlY6m2@cluster0.sp5ol.mongodb.net/test');
var Schema = mongoose.Schema;

var FileSchema = new Schema({
	fileTitle: {
        type: String,
        required: true
    },
    fileSize: String,
    fileType: {
        type: String,
        required: true
    },
    fileExt: String,
    fileStatus: {
        type: Number,
        required: true
    },
    fileOtherStatus: {
        required: true,
        type: ObjectId
    },
	fileRevisions: {
        type: Array,
        required: true,
    },
    fileOwner: {
        type: ObjectId,
        required: true
    },
    fileCreatedBy: {
        type: ObjectId,
        required: true
    },
    fileLastUpdatedBy: {
        type: ObjectId
    },
	fileSharedWith: Array,
    filePath: String,
    filePassword:String,
    fileValidity:Date,
    isActive:{
        type: Number,
        default: 1
    }
},
{ timestamps: true, versionKey: false });

module.exports = mongoose.model('File', FileSchema);