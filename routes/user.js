var express = require('express')
const { createUser } = require('../controller/user')


const router = express.Router()



router.post("/create",createUser)


module.exports = router