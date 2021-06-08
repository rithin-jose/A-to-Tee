var mongoose =  require('mongoose')

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:32
    }
},{timestamps:true})

module.exports = mongoose.model("Category",categorySchema)