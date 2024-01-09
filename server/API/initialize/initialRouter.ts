import express from "express"
import { initial } from "./initial"
const router = express.Router()

router
.get("" , initial)

export default router;