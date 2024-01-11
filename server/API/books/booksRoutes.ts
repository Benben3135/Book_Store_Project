import express from "express"
const router = express.Router()
import {getAllBooks , addAllBooks, createBook, getOneBook} from "./booksCont"

router
.get("", getAllBooks)
.post("/addBooks", createBook)
.get("/:title", getOneBook) //<-- to get a specific book by its title


//good routing example :/api/users
// .get("") <-- to get ALL users 
//.get("/:id") <-- to get a specific user by its id
// .post("") <-- create a user
// .patch("/:id") <-- update a specific field ot information in a user 
// .put("/:id") <-- update entire user
// .delete(/:id) <-- delete by id

export default router