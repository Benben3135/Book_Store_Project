import axios from "axios";


export const getOneBook = async (id: number) => {
    try {
        const {data} = await axios.get(`/api/books/getOneBook/${id}`);
        console.log(data.results);
        return(data.results[0])
    } catch (error) {
        console.error("Error fetching book:", error);
    }
};