import express from "express"
import { register,getActiveUserData } from "./userCont";
const router = express.Router()

router
.get("/cookie" , getActiveUserData)
.post("", register) 

export default router;