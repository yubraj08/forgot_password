const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var dotenv = require('dotenv').config()

const login = async(req,res)=>{

    const {email,password} = req.body

    try {
 
        const user = await User.findOne({ email });

   
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

 
        const isPasswordValid = await bcrypt.compare(password, user.password);

 
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }


        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        
        res.status(200).json({token});
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}


module.exports = {
    login
}