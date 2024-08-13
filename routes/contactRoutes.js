import express from 'express';

const router = express.Router()

import {createContactDetails,getDeveloperContact,getlearnerContact} from '../controller/contactController.js'



router.post("/create",createContactDetails)
router.get("/learner",getlearnerContact)
router.get("/developer",getDeveloperContact)


export default router