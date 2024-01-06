import express from 'express'
// import connection from "../../DB/database"


export async function createNewUser(req: express.Request, res: express.Response) {
    try {
        const userData = req.body.user;
        console.log("Received user data:", userData);
        // Your database operation here (if any)
        res.status(200).json({ message: "User created successfully" });
    } catch (error: any) {
        console.error("Error creating user:", error);
        res.status(500).send({ ok: false, error: error.message });
    }
}



