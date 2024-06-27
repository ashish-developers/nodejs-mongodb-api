const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
mongoose.connect('mongodb+srv://admin:6AGtwpOlgkJlY6m2@cluster0.sp5ol.mongodb.net/test');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	userName: {
        type: String,
        unique: true,
        required: true
    },
    userEmail:{
        type: String,
        unique: true,
        required: true
    },
    userPassword:String,
    subscriptionId: ObjectId,
    subscriptionEndDate : Date,
    themeMode : String,
    lastLogin : Date,
    isActive:{
        type: Number,
        default: 1
    }
},
{ timestamps: true, versionKey: false });

module.exports = mongoose.model('User', UserSchema);