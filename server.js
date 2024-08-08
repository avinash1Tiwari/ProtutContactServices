import express from 'express'
import contactRoutes from './routes/contactRoutes.js'
import mailRoutes from './routes/mailRoutes.js'
const app = express();

import dotenv from 'dotenv'

dotenv.config();

app.use(express.json())


import dbConnect from './config/db.js'

dbConnect();


const router = express.Router();

// router.get('/api/testing',async(req,res)=>{
//     return res.status(200).json({
//         message : "all are running fine"
//     })
// })

app.get("/api",(req,res)=>{
    res.send({
        message:"kya hua"
    })
})
app.use('/api/contact',contactRoutes);
app.use('/api/mail',mailRoutes);



app.listen(process.env.PORT,(req,res)=>{
    console.log("server successfully started at port : ",process.env.PORT)
})

