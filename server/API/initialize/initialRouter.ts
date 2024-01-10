import express from "express"
import { initial , initialUserSql } from "./initial"
const router = express.Router()

router
.get("" , initial)
.get("/user", initialUserSql)

export default router;