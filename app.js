const express= require('express'); 

const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

require('dotenv/config');

app.use(bodyParser.json());
app.use(cors())

const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute); 
 
app.get('/',(req,res)=>{
    res.send('we are on home');
});

   


mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('connected to DB')
})
app.listen(3000);