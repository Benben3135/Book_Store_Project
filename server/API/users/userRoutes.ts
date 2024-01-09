import express from "express"
import { register,getActiveUserData, login, deleteUser ,changeUserName } from "./userCont";
const router = express.Router()

router
.get("/cookie" , getActiveUserData)
.post("", register)
.post("/login", login)
.delete("/delete", deleteUser)
.patch("/name", changeUserName)

export default router;