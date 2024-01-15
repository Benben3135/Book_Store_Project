import axios from "axios";


export const getAuthorBooks = async (authorName:string) => {
    try {
        const {data} = await axios.get(`/api/books/authorBooks/${authorName}`)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}