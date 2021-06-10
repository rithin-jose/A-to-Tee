var expressJwt = require('express-jwt');

var dotenv = require('dotenv')
dotenv.config();


// always add algorithms to prevent downgrade attack 
exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty:"auth",
    algorithms:['HS256']
})

// exports.isAuthenticated