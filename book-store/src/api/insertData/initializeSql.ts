import axios from "axios";

export const initializeSql = async () => {
    const {request} = await axios.get("/api/initialize");
    console.log(request)
}

export const initializeUserSql = async () => {
    const {request} = await axios.get("/api/initialize/user");
    console.log(request)
}