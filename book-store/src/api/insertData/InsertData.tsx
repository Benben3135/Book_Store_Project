import { books } from "../../util/books"
import axios from "axios";

interface Book {
    title: string,
    author: string,
    pageNum: number,
    publisher: string,
    description: string,
    image: string,
    likes: number,
}

const booksList = books

const InsertData =  (booksList: Book[]) => {
try {
    booksList.forEach( async (book) => {
        await axios.post("/api/books/createBook", book)
    })
    console.log("book insert successfully")
} catch (error) {
    console.error('error insert book', error)
}
}

export default InsertData
