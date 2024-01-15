import axios from "axios";


export const handleSerachDB = async (search:string,category:string) => {
const {data} = await axios.post("/api/books/search" , {search,category})
return(data)
}