
import {StatusCodes} from 'http-status-codes'
import mailModel from '../models/mailModel.js'
const createMail = async(req,res) =>{
    try{

        const {role,email} = req.body;

        const isAlreadyExist = await mailModel.findOne({email:email});

    
        if(isAlreadyExist)
        {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success : false,
                message : "already registered with given email",
            })
        }

        const mailData = await mailModel.create({
            email:email,
            role : role
        })

        return res.status(StatusCodes.OK).json({
            success : true,
            message : "successfully mail entry created",
            data : mailData
        })
    }
    catch(error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success :false,
            message : "something went wrong",
            error : error
        })
    }
}


const getlearnerEmail = async(req,res) =>{
    try{

        const learners = await mailModel.find({ role: 'learner' }, 'email');


        return res.status(StatusCodes.OK).json({
            success : true,
            message : "successfully completed the request",
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




const getDeveloperEmail = async(req,res) =>{
    try{

        const devs = await mailModel.find({ role: 'developer' }, 'email');


        return res.status(StatusCodes.OK).json({
            success : true,
            message : "successfully completed the request",
            count : devs.length,
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
    createMail,
    getDeveloperEmail,
    getlearnerEmail
}