import axios from "axios";

export const initializeBooksSql = async () => {
    const {request} = await axios.get("/api/initialize");
}

export const initializeUserSql = async () => {
    const {request} = await axios.get("/api/initialize/user");
}

export const initialFavoriteSql = async () => {
    const {request} = await axios.get("/api/initialize/favorite")
}