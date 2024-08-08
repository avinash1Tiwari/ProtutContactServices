import express from 'express';

const router = express.Router()

import {createMail,getDeveloperEmail,getlearnerEmail} from '../controller/mailController.js'


router.post("/create",createMail)
router.get("/getlearner",getlearnerEmail)
router.get("/getdeveloper",getDeveloperEmail)

export default router