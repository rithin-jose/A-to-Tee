var User = require('../models/user')

exports.signOut = (req,res) => {
    res.json({
        "message":"User Signed out"
    })
}

exports.signUp = (req,res) => {
    console.log("REQUEST BODY", req.body);
    var user = new User(req.body)

    user.save((error,user) => {
        if(error){
            return res.status(400).json({
                error:"Not able to save in DB"
            })
        }
        
        res.json({
            name:user.name,
            email:user.email,
            id:user._id
        })
    })

}