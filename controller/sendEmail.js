var nodemailer = require('nodemailer');
var dotenv = require('dotenv').config()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.USER}`,
    pass:`${process.env.PASS}`
  }
});

var mailOptions = {
  from: `${process.env.USER}`,
  to: `${process.env.TO}`,
  subject: 'Sending Email using Node.js with env testing pass and user',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});




// var transporter = nodemailer.createTransport({
//     host: 'something.yourdomain.com',
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: 'username@mydomain.com', // your domain email address
//       pass: 'password' // your password
//     }
//   });