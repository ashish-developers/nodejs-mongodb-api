const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:6AGtwpOlgkJlY6m2@cluster0.sp5ol.mongodb.net/test');
var Schema = mongoose.Schema;

var DirectorySchema = new Schema({
	dirName: {
        type: String,
        required: false
    },
    dirType: {
        type: String,
        required: false
    },
    dirStatus: String,
    dirOtherStatus: String,
    dirOwner: {
        type: ObjectId,
        required: false
    },
    dirCreatedBy: String,
    dirLastUpdatedBy: String,
	dirSharedWith: Array,
    dirPath: String,
    dirPassword:String,
    isActive:{
        type: Number,
        default: 1
    }
},
{ timestamps: true, versionKey: false });

module.exports = mongoose.model('Directory', DirectorySchema);