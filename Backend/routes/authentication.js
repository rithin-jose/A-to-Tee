var express = require('express')
const {signOut,signUp} = require('../controllers/authentication')

var router = express.Router();

router.post("/signup",signUp)
router.get("/signout",signOut)

module.exports = router;