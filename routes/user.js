var express = require('express')
const { createUser } = require('../controller/user')
const { forgot } = require('../controller/sendEmail')
const { resetPass } = require('../controller/reset')
const { newPass } = require('../controller/newPass')
const { login } = require('../controller/login')


const router = express.Router()



router.post("/create",createUser)

router.post("/login",login)

router.post("/request",forgot)

router.post("/reset",resetPass)

router.post("/newPass",newPass)


module.exports = router