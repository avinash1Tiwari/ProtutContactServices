import mongoose from 'mongoose'


const mailSchema = new mongoose.Schema({
    role : {
        type:String,
        required:true
    },
    email:{
        type : String,
        required: true
    }
})

const mailModel = mongoose.model("mailModel",mailSchema)

export default mailModel