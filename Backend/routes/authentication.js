var express = require('express')
const { check } = require('express-validator');
const {signOut,signUp,signIn} = require('../controllers/authentication')

const {isSignedIn} = require("../middleware/index")

var router = express.Router();

router.post("/signup",
    [
        check("first_name").isLength({min:3}).withMessage("Name should be atleast 3 character"),
        check("email").isEmail().withMessage("Email is required"),
        check("password").isLength({min:5}).withMessage("Password must be atleast 5 characters"),
    ],
    signUp
);

router.post("/signin",
    [
        check("email").isEmail().withMessage("Email is required"),
        check("password").isLength({min:1}).withMessage("Password is Required"),
    ],
    signIn
);

router.get("/signout",signOut);

router.post("/testroute",isSignedIn,(req,res)=>{
    res.send("test")
})

module.exports = router;