import axios from "axios";

export const addCommentToDB = async (comment: string, book_id: number) => {
    try {
        const response = await axios.post("/api/books/addComment", { comment, book_id });
        const { ok, results } = response.data;

        if (ok) {
            //@ts-ignore
            return (results)
        } else {
            console.error("Error retrieving books:", response.data.error);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
};

export const getAllComments = async (book_id:number) => {
    try {
        const {data} = await axios.get(`/api/books/getAllComments/${book_id}`)
        return data.results;
    } catch (error) {
        console.error("Error:", (error as Error).message);
    }
}