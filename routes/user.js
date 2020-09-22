const express=require('express')
const User = require('../model/User.model')
const router=express.Router()


router.get('/',(req,res)=>{
    User.find().then(users=>res.json(users)).catch(err=>res.json(err))
})
module.exports= router;  

router.post('/add',(req,res)=>{
<<<<<<< HEAD
    const email=req.body.email;
    const name=req.body.name;
    const password=req.body.password;
    
    const details = new User({name,email,password});
=======
    const name=req.body.name;
    const img=req.body.img;
    const summary=req.body.summary;
    
    const details = new User({name,img,summary});
>>>>>>> 688bd0fd857a7df5072aff9a2bf9184d1c252151
    details.save().then(()=>res.json(" added ")).catch(err=>res.json(err))
})
router.delete('/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id).
    then(()=>res.send("deleted")).catch((err)=>res.send(err));

<<<<<<< HEAD
})
router.get('/getone/:email',(req,res)=>{
    User.findOne({'email':req.params.email}).then(users=>res.json(users.password)).catch(err=>res.json(err))

})
=======
})
>>>>>>> 688bd0fd857a7df5072aff9a2bf9184d1c252151
