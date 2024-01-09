import express from 'express'
import connection from "../../DB/database"

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

export async function createBook(req: express.Request, res: express.Response) {
    try {

        const { title, author, pageNum, publisher, description, image, likes } = req.body
        if (!title || !author || !image) throw new Error("no data in FUNCTION createAllBook in file booksCtrl.ts")

        const query = `INSERT INTO books (title, author, pageNum, publisher, description, image, likes) VALUES ('${title}', '${author}', ${pageNum}, '${publisher}', '${description}', '${image}', ${likes});`;
        connection.query(query, (err, results) => {
            try {
                if (err) throw err;
                res.send({ ok: true, results })
            } catch (error) {
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}