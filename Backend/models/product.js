var mongoose =  require('mongoose')
var {ObjectId} = mongoose.Schema;


var Schema  = mongoose.Schema

var productSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32
    },
    description:{
        type:String,
        trim:true,
        required:true,
        maxlength:1000,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type: ObjectId,
        ref: "Category",
        required:true
    },
    stock:{
        type:Number
    },
    sold:{
        type:Number,
        defult:0
    },
    photo:{
        data: Buffer,
        contentType: String
    }

},{timestamps:true})

module.exports = mongoose.model("Product",productSchema)