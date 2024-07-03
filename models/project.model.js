const { ObjectId } = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:6AGtwpOlgkJlY6m2@cluster0.sp5ol.mongodb.net/test');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	dirName: {
        type: String,
        default:"Unknown",
        required: true
    },
    dirType: {
        type: String
    },
    dirStatus: String,
    dirOtherStatus: String,
    dirOwner: {
        type: ObjectId,
        required: true
    },
    dirCreatedBy: {
        type: ObjectId,
        required: true
    },
    dirLastUpdatedBy: ObjectId,
	dirSharedWith: Array,
    dirParent: String,
    dirPassword: String,
    isActive:{
        type: Number,
        required: true,
        default: 1
    }
},
{ timestamps: true, versionKey: false });

module.exports = mongoose.model('Project', ProjectSchema);