import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name:{
        type: String,
        required:true,
        trim:true
    },
    last_name:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },

    userInfo:{
        type: String,
        trim:true
    },

    // TODO: Password validation
    password:{
        type: String,
        trim:true
    },

    salt: String,
    role:{
        type:Number,
        default:0
    },
    purchases:{
        type: Array,
        default:[]
    }
});

// Export in node js
module.export = mongoose.model("User",userSchema)