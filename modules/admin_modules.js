const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const adminsignupSchema = Schema({
    admin_rollno:{
        type:String,
        required:true
    },
    admin_name:{
        type:String,
        required:true
    },
    admin_email:{
        type:String,
        required:true
    },
    admin_password:{
        type:String,
        required:true
    }   
})

const VolunteerSchema = Schema({
    vol_id:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    activity:{
        type: String,
        required: true
    },
    slot_available:{
        type:Number,
        required:true
    },
    description: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})
module.exports.Admin = mongoose.model("Admin",adminsignupSchema) 
module.exports.Volunteer = mongoose.model("Volunteer",VolunteerSchema) 