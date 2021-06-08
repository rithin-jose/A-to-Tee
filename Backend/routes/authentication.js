var express = require('express')
const { check } = require('express-validator');
const {signOut,signUp} = require('../controllers/authentication')

var router = express.Router();

router.post("/signup",[
    check("first_name").isLength({min:3}).withMessage("Name should be atleast 3 character"),
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({min:5}).withMessage("Password must be atleast 5 characters"),
],signUp)

router.get("/signout",signOut)

module.exports = router;