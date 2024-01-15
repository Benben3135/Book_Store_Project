import axios from "axios";

export const likeBook = async (id:number) => {
    const {data} = await axios.post("/api/books/addFavorite" , {id})
    console.log(data)
}

export const getFavoriteBooks = async () => {
    const {data} = await axios.get("/api/books/getFavorites")
    console.log("data from getFavoriteBooks" , data.results)
    //@ts-ignore
    const bookIds:Array = data.results.map(favorite => favorite.book_id);
    return bookIds;
}