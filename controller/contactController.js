
import {StatusCodes} from 'http-status-codes'
import contactModel from '../models/contactModel.js'
const createContactDetails = async(req,res) =>{
    try{

        const {role,email,firstname,lastname,phone} = req.body;

        let contact = await contactModel.findOne({ email });

        if (contact) {
            contact.entries.push({ firstname, lastname, role, phone });
            const contactData = await contact.save();

            return res.status(StatusCodes.OK).json({
                success : true,
                message : "successfully contact details created",
                data : contactData
            })

        } 


            contact = new contactModel({
                email,
                entries: [{ firstname, lastname, role, phone }],
            });
            const contactData = await contact.save();

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





const getlearnerContact = async (req, res) => {
    try {
        // Fetch documents where 'learner' is one of the roles in the entries
        const learners = await contactModel.find({
            'entries.role': 'learner',
        });

        console.log("lerner : " + learners)

        // Flatten the array to return only the entries where the role is 'learner'
        const learnerEntries = learners.flatMap(contact =>
            contact.entries.filter(entry => entry.role === 'learner')
        );

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully completed the request",
            count: learnerEntries.length,
            data: learnerEntries,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};








const getDeveloperContact = async(req,res) =>{
    try {
        const developers = await contactModel.find({
            'entries.role': 'developer',
        });

        console.log("developer : " + developers)

        const developerEntries = developers.flatMap(contact =>
            contact.entries.filter(entry => entry.role === 'developer')
        );

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully completed the request",
            count: developerEntries.length,
            data: developerEntries,
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
}



export{
    createContactDetails,
    getDeveloperContact,
    getlearnerContact
}