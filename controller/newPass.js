const User = require('../models/user')
const bcrypt = require('bcrypt')

const newPass = async(req,res)=>{


   try {
    const { email, password } = req.body;




    const hashedPwd = await bcrypt.hash(password, 10) 


    const newPassword = await User.updateOne({ email: email }, 
        { $set: { password: hashedPwd } },
        { upsert: false });

    if(newPassword){
        return res.status(200).json("New password updated")
    }
   } catch (error) {
        console.log(error)
        return res.status(404).json(error)
   }



}

module.exports = {
    newPass
}