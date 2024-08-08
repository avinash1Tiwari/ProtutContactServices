import express from 'express';

const router = express.Router()

import {createContactDetails,getDeveloperContact,getlearnerContact} from '../controller/contactController.js'



router.post("/create",createContactDetails)
router.get("/learner",getDeveloperContact)
router.get("/developer",getlearnerContact)

export default router