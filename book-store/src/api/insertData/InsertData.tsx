import { books } from "../../util/books"
import { Book } from '../../component/books/BookCard';
import axios from "axios";

const InsertData =  (books: Book[]) => {
try {
      books.forEach( async (book) => {
        await axios.post("/api/books/createBook", book)
    })
    console.log("book insert successfully")
} catch (error) {
    console.error('error insert book', error)
}
}

export default InsertData
