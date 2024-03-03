var dotenv = require('dotenv').config()


const User = require("../models/user")


const resetPass = async(req,res)=>{




const { email, code } = req.body;


  if(!email && !code) return res.status(404).json("Please insert the code")


  const userExist = await User.find({email:email,code:code})


  if(userExist.length === 0){
      return res.status(404).json("Invalid Code")
  } else{
    return res.status(200).json({
        message:"Email code matched",
        matched:true
    })
  }

}


module.exports = {
    resetPass
}