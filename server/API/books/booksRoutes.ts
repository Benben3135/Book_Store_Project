import express from "express"
const router = express.Router()

import {getAllBooks , addAllBooks, createBook, addFavorite , sendFavorites, getOneBook , getAuthorBooks} from "./booksCont"

router
.get("", getAllBooks)
.get("/getFavorites" , sendFavorites)
.post("/addBooks", createBook)
.get("/getOneBook/:id", getOneBook) //<-- to get a specific book by its title
.post("/addFavorite" , addFavorite)
.get("/authorBooks/:authorName", getAuthorBooks)

//good routing example :/api/users
// .get("") <-- to get ALL users 
//.get("/:id") <-- to get a specific user by its id
// .post("") <-- create a user
// .patch("/:id") <-- update a specific field ot information in a user 
// .put("/:id") <-- update entire user
// .delete(/:id) <-- delete by id

export default router