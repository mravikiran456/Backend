const express= require('express'); 

const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
require('dotenv/config');

app.use(bodyParser.json());

const postsRoute=require('./routes/post');

app.use('/posts',postsRoute); 
 
app.get('/',(req,res)=>{
    res.send('we are on home');
});

   
app.listen(3000);

mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('connected to DB')
})