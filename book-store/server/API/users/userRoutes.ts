import express from "express"
import {createNewUser} from "./userCont"
const router = express.Router()

router.get("", () =>{})
.post("/create-newuser" , createNewUser)

export default router;