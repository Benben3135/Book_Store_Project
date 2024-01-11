import { books } from "../../util/books"
import axios from "axios";



const booksList = books

const InsertData =  () => {
try {
    console.log("insert data started baby!", booksList);
    
    booksList.forEach( async (book) => {
        console.log(book)
        await axios.post("/api/books/addBooks", book)
    })
    console.log("book insert successfully")
} catch (error) {
    console.error('error insert book', error)
}
}

export default InsertData
