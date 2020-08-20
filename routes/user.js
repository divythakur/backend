const express=require('express')
const User = require('../model/User.model')
const router=express.Router()


router.get('/',(req,res)=>{
    User.find().then(users=>res.json(users)).catch(err=>res.json(err))
})
module.exports= router;  

router.post('/add',(req,res)=>{
    const name=req.body.name;
    const img=req.body.img;
    const summary=req.body.summary;
    
    const details = new User({name,img,summary});
    details.save().then(()=>res.json(" added ")).catch(err=>res.json(err))
})
router.delete('/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id).
    then(()=>res.send("deleted")).catch((err)=>res.send(err));

})