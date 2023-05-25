const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usignupSchema = new Schema({
    user_rollno:{
        type:String,
        required:true
    },
    user_name:{
        type:String,
        required:true
    },
    user_mail:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    },
    user_cpassword:{
        type:String,
        required:true
    },
    dept:{
        type:String, 
        required:true
    },
    yearofstudy:{
        type:String, 
        required:true
    },
    user_section:{
        type:String, 
        required:true 
    },
    isVolBefore:{
        type: Boolean,
        required:true,
        default:false
    }
})

const volRegisterSchema = new Schema({
    vol_id:{
        type: String,
        required: true
    },
    user_rollno:{
        type:String,
        required:true
    },
    Volunteer:{
        type: Schema.Types.ObjectId,
         ref: 'Volunteer'
    },
    user_details:{
        type: Schema.Types.ObjectId,
         ref: 'User'
    }
})
module.exports.User = mongoose.model("User",usignupSchema) 
module.exports.VolRegister = mongoose.model("VolRegister",volRegisterSchema) 