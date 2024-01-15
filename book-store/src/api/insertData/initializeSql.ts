import axios from "axios";

export const initializeBooksSql = async () => {
    const {request} = await axios.get("/api/initialize");
    console.log(request)
}

export const initializeUserSql = async () => {
    const {request} = await axios.get("/api/initialize/user");
    console.log(request)
}

export const initialFavoriteSql = async () => {
    const {request} = await axios.get("/api/initialize/favorite")
    console.log(request)
}

export const intialReviewsSql = async () => {
    const {request} = await axios.get("/api/initialize/review")
    console.log(request)
}
