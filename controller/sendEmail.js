var nodemailer = require('nodemailer');
var dotenv = require('dotenv').config()
const shortId = require('shortid')


const User = require("../models/user")
const resetPassword = require("../models/forgotPass")

const forgot = async(req,res)=>{


  const {email} = req.body


  if(!email) return res.status(404).json("Please insert email")


  const userExist = await User.find({email})


  if(userExist.length === 0){
      return res.status(404).json("This email doesn't exist ")
  } 

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.USER}`,
      pass:`${process.env.PASS}`
    }
  });
  
  const code = shortId(8)

  var mailOptions = {
    from: `${process.env.USER}`,
    to: `${email}`,
    subject: 'Code to reset password',
    text: `'Code to reset password : ${code}'`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {


      console.log('Email sent: ' + info.response);
      return res.status(200).json("Email send to " + email )
    }
  });
  const userObject = { email,code }
  const reset = await resetPassword.create(userObject)

  if (reset) return res.status(200).json("Code send")
}

module.exports = {
  forgot
}




// var transporter = nodemailer.createTransport({
//     host: 'something.yourdomain.com',
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: 'username@mydomain.com', // your domain email address
//       pass: 'password' // your password
//     }
//   });