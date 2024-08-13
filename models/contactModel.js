// import mongoose from 'mongoose'

// //  first name, last name, email , phone number , role
// const mailSchema = new mongoose.Schema({
// firstname : {
//         type:String,
//         required:true
//     },
//     lastname : {
//         type:String,
//         required:true
//     },
//     role : {
//         type:String,
//         required:true
//     },
//     phone : {
//         type:String,
//         required:true
//     },
//     email:{
//         type : String,
//         required: true
//     }
// })

// const contatModel = mongoose.model("contatModel",mailSchema)

// export default contatModel









import mongoose from 'mongoose';


const entrySchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
});


const mailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    entries: [entrySchema]
});


const contactModel = mongoose.model('contactModel', mailSchema);

export default contactModel;
