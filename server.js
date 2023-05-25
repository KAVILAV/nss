const express = require('express')
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')

require('dotenv').config();

const adminrouter = require('./router/admin_router')
const userrouter = require('./router/user_router')

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 27000;
const uri = process.env.MONGO_URI;
mongoose.connect(uri,
    {
        useNewUrlParser: true, 
        useUnifiedTopology:true   
    })
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))
/* app.use('/second',(req,res)=>{
    console.log('second middleware');
    res.send('<h1>second page</h1>')
}) */
app.use('/admin',adminrouter)
app.use('/user',userrouter)

app.listen(port,()=>{
    console.log(`server is running on the port number ${port}`)
})

