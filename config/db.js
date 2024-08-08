import mongoose from 'mongoose'

import dotenv from 'dotenv'


dotenv.config()
const dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL,{

    }
)
.then( () =>{
    console.log("db connection successfully");

})
.catch((error) =>{
    console.log("error occured during connection")
    console.log(error)
})
}


export default dbConnect