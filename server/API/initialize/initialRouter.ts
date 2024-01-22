import express from "express"
import { initial , initialUserSql , intialLikesSql , intialReviewsSql } from "./initial"
const router = express.Router()

router
.get("" , initial)
.get("/user", initialUserSql)
.get("/favorite" , intialLikesSql)
.get("/review" , intialReviewsSql)

export default router;