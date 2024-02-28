const User = require('../models/user')
const bcrypt = require('bcrypt')

const createUser = async(req,res)=>{


    const { name, email, password } = req.body;

    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = { name, email,"password": hashedPwd }

    // Create and store new user 
    const user = await User.create(userObject)

    if (user) { //created 
        res.status(201).json({ message: `New user ${name} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }

}




module.exports = {
    createUser
}