import express from "express"
import {register,check} from "./userCont"
const router = express.Router()

router.get("", check)
.post("", register) 

export default router;