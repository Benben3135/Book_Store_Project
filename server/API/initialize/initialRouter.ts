import express from "express"
import { initial , initialUserSql , intialLikesSql } from "./initial"
const router = express.Router()

router
.get("" , initial)
.get("/user", initialUserSql)
.get("/favorite" , intialLikesSql)

export default router;