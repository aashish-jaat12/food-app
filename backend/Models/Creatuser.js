const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:{
type:String,
require: true
    },
    location:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    }
})


module.exports = mongoose.model("newuser", userschema )