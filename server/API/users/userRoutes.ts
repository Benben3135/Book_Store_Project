import express from "express"
import { register } from "./userCont";
const router = express.Router()

router
.post("", register) 

export default router;