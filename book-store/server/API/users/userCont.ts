import express from 'express'
import connection from "../../DB/database"


export async function createNewUser(req: express.Request, res: express.Response) {
    try {
       console.log(req)
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })  //closer - without it the error could stack in loop
    }
}



