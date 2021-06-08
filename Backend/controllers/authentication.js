var User = require('../models/user')
var {validationResult} = require("express-validator")

exports.signOut = (req,res) => {
    res.json({
        "message":"User Signed out"
    })
}

exports.signUp = (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    var user = new User(req.body)
    user.save((error,user) => {
        if(error){
            return res.status(400).json({
                error:"Not able to save in DataBase"
            })
        }
        
        res.json({
            first_name:user.first_name,
            email:user.email,
            id:user._id
        })
    })

}