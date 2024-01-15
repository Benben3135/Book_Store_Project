import express from "express"
const router = express.Router()

import {getAllBooks , addAllBooks, createBook, addFavorite , sendFavorites, getOneBook , getAuthorBooks , addComment , getAllComments , search} from "./booksCont"

router
.get("", getAllBooks)
.get("/getFavorites" , sendFavorites)
.post("/addBooks", createBook)
.get("/getOneBook/:id", getOneBook) //<-- to get a specific book by its title
.post("/addFavorite" , addFavorite)
.get("/authorBooks/:authorName", getAuthorBooks)
.post("/addComment" , addComment)
.get("/getAllComments/:book_id" , getAllComments)
.post("/search" , search)

export default router