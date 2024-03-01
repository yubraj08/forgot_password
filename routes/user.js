var express = require('express')
const { createUser } = require('../controller/user')
const { forgot } = require('../controller/sendEmail')


const router = express.Router()



router.post("/create",createUser)

router.post("/request",forgot)


module.exports = router