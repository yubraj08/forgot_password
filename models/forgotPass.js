const mongoose = require('mongoose'); 
  
const forgotPassword = new mongoose.Schema({ 

    email: { 
        type: String, 
        require: true,
        unique: true
    }, 
    code:{
        type: String,
        require:true
    },
},{ timestamps: true } ) 
  
module.exports = mongoose.model("passwordReset", forgotPassword)
