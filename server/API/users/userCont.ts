import express from 'express'
// import connection from "../../DB/database"


export async function register(req: express.Request, res: express.Response) {
    try {
        const userData = req.body;
        console.log("Received user data:", userData);
        // Your database operation here (if any)
        res.status(200).send({ message: "User created successfully" });
    } catch (error: any) {
        console.error("Error creating user:", error);
        res.status(500).send({ ok: false, error: error.message });
    }
}



export async function check(req: express.Request, res: express.Response) {
    try {
        // Your check logic here
        console.log("i got a check request")
        res.status(200).send({ message: "Server is running and check passed" });
    } catch (error: any) {
        console.error("Error in check:", error);
        res.status(500).send({ ok: false, error: error.message });
    }
}