var expressJwt = require('express-jwt');

var dotenv = require('dotenv')
dotenv.config();


// always add algorithms to prevent downgrade attack 
exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty:"auth",
    algorithms:['HS256']
})


exports.isAuthenticated = (req,res,next) => {
    let checker = req.profile && req.auth && req.profile._id === req.auth._id

    if(!checker){
        res.status(403).json({
            error:"Access Denied"
        })
    }
    next();
}

exports.isAdmin = (req,res,next) => {
    if(req.profile.role === 0){
        return res.status(403).json({
            error:"You are not an admin, Access Denied"
        })
    }
    next();
}