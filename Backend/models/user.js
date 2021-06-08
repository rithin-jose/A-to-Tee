var mongoose =  require('mongoose')
var crypto = require('crypto')
var uuidv4 = require('uuid')

var createHmac = crypto.createHmac
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

    encrypted_password:{
        type: String,
        required:true
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
},{timestamps:true});

userSchema.virtual("password")
    .set(function(plainPassword){

        // private variable
        this._password = plainPassword
        this.salt = uuidv4();
        this.encrypted_password = this.securePassword(this._password)

    })
    .get(function(){
        return this._password
    })

userSchema.methods = {

    authenticate: function(plainPassword){
        return this.securePassword(plainPassword) ===  this.encrypted_password 
    },

    securePassword: function(plainPassword){
        if(!plainPassword)
            return "";
        
        try{
            return createHmac('sha256',this.salt)
                .update(plainPassword)
                .digest('hex')
        }
        catch(error){
            return ""
        }
    }
}

// Export in node js
module.export = mongoose.model("User",userSchema)