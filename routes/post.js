const express=require('express');
const router=express.Router();  
const Post=require('../models/post');

router.get('/',(req,res)=>{
    res.send('we are on posts');
});

router.get('/users',(req,res)=>{
    res.send('we are on users');
});
router.post('/',async (req,res)=>{
const post=new Post({
    title:req.body.title,
    description:req.body.description
});

const savedPost=await post.save()
.then(data=>{
    res.json(data);
})
.catch(err=>{
    res.json({message:err})
})
})

module.exports=router;