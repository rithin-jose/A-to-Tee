const User = require('../models/user')

exports.getUserByID = (req,res,next,id) => {
    User.findById(id).exec((error,user) => {
        if(error || !user){
            return res.status(400).json({
                error: "No User was found in DB"
            })
        }

        req.profile = user;
        next()
    })
}