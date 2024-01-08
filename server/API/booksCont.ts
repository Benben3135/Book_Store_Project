import express from 'express'
import connection from '../DB/database'

export async function getAllBooks(req: express.Request, res: express.Response) {
    try {
        const query = "SELECT * FROM books"
        connection.query(query, (err, results) => {
            try {
                if (err) throw err
                res.send({ok: true, results})
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })  //closer - without it the error could stack in loop
    }
}
