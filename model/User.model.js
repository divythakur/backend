const mongoose = require('mongoose')


const userschema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
        unique:false
    },
    img:{
        type:String,
        required:true,
        unique:false
    },
    summary:{
        type:String,
        required:true,
        unique:false
    }
})
module.exports=mongoose.model("User",userschema)