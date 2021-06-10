var User = require('../models/user')
var {validationResult} = require("express-validator")
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

exports.signOut = (req,res) => {
    res.clearCookie("token");
    res.json({
        "message":"User Signed out Successfully"
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

exports.signIn = (req,res) => {
    const {email, password} = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }

    User.findOne({email}, (error,user) => {
        if(error || !user){
            return res.status(400).json({
                    error:"User not found"
                })
        }

        if(!user.authenticate(password)){
            return res.status(401).json({
                    error:"Email and Password do not match"
                })   
        }

        // creating the token
        const token = jwt.sign({"_id": user._id},process.env.SECRET)

        // placing the token in cookie
        res.cookie("access-token",token,{expire: new Date() + 9999})

        // send response to frontend
        const {_id,first_name,last_name,email,role} = user
        res.json({
            token,
            user:{_id,first_name,last_name,email,role,email}
        })
    })           
}


