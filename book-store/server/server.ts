import express from 'express'

require("dotenv").config()

const app = express()

const PORT = process.evn.PORT || 4000

//all app.use() are middlewares
app.use(express.json())  

import bookRoutes from "./API/books/booksRoutes"
app.use("/api/books", booksRoutes)

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})