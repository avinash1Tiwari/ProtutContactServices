
import {StatusCodes} from 'http-status-codes'
import contactModel from '../models/contactModel.js'
const createContactDetails = async(req,res) =>{
    try{

        const {role,email,firstname,lastname,phone} = req.body;

        const isAlreadyExist = await contactModel.findOne({email:email});

        console.log("isaleady : ", isAlreadyExist)
        if(isAlreadyExist)
        {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success : false,
                message : "already registered with given email",
            })
        }
        console.log("kkk")


        const contactData = await contactModel.create({
            firstname,lastname,email,phone,role
        })

      

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "successfully contact details created",
            data : contactData
        })
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "something went wrong",
            error : error
        })
    }
}


const getlearnerContact = async(req,res) =>{
    try{

        const learners = await contactModel.find({ role: 'learner' }, );


        return res.status(StatusCodes.OK).json({
            success : true,
            message : "succefully completed the request",
            count : learners.length,          
            data : learners
        })
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "something went wrong",
            error : error
        })
    }
}




const getDeveloperContact = async(req,res) =>{
    try{

        const devs = await contactModel.find({ role: 'developer' }, );


        return res.status(StatusCodes.OK).json({
            success : true,
            count : devs.length,
            message : "succefully completed the request",
            data : devs
        })
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false,
            message : "something went wrong",
            error : error
        })
    }
}



export{
    createContactDetails,
    getDeveloperContact,
    getlearnerContact
}