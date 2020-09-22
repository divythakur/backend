const mongoose = require('mongoose')


const userschema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
        unique:false
    },
<<<<<<< HEAD
    email:{
=======
    img:{
>>>>>>> 688bd0fd857a7df5072aff9a2bf9184d1c252151
        type:String,
        required:true,
        unique:false
    },
<<<<<<< HEAD
    password:{
=======
    summary:{
>>>>>>> 688bd0fd857a7df5072aff9a2bf9184d1c252151
        type:String,
        required:true,
        unique:false
    }
})
module.exports=mongoose.model("User",userschema)