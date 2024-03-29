import express from 'express'
import connection from '../../DB/database'
import { books } from "../../util/books"

import jwt from 'jwt-simple';

const saltRounds = 10;

export async function addAllBooks(req: express.Request, res: express.Response) {
    try {

        // Use Promise.all to wait for all queries to finish
        await Promise.all(
            books.map(async (book) => {
                const insertQuery = 'INSERT INTO book_store.books (title, author, pageNum, publisher, description, image, likes,genre) VALUES (?, ?, ?, ?, ?, ?, ?)';

                const queryPromise = new Promise((resolve, reject) => {
                    connection.query(insertQuery, [book.title, book.author, book.pageNum, book.publisher, book.description, book.image, book.likes, book.genre], (err, resultsAdd) => {
                        if (err) reject(err);
                        else resolve(resultsAdd);
                    });
                });
                await queryPromise;
            })
        );

        // Send a response when all queries are complete
        res.status(200).send({ ok: true, message: 'All books added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ ok: false, error });  // Handle errors more gracefully in a production environment
    }
}

export async function getAllBooks(req: express.Request, res: express.Response) {
    try {
        const query = "SELECT * FROM book_store.books"
        connection.query(query, (err, results) => {
            try {
                if (err) throw err
                res.send({ ok: true, results })
            } catch (error) {
                console.log(error)
                res.status(500).send({ ok: false, error })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ ok: false, error })
    }
}

export async function createBook(req: express.Request, res: express.Response) {
    try {

        const bookData = req.body
        const { title, author, pageNum, publisher, description, image, likes, genre } = req.body
        if (!title || !author || !image) throw new Error("no data in FUNCTION createAllBook in file booksCtrl.ts")

        const checkQuery = `SELECT * FROM book_store.books WHERE  title = ?`
        connection.query(checkQuery, [title], (err, results) => {
            if (err) throw err;
            //@ts-ignore
            if (results.length > 0) {
                res.status(409).send({ ok: false, message: "Book already exists" });
            }
            else {
                const query = `INSERT INTO book_store.books (title, author, pageNum, publisher, description, image, likes,genre) VALUES ('${title}', '${author}', ${pageNum}, '${publisher}', "${description}", '${image}', ${likes} , '${genre}');`;
                connection.query(query, (err, results) => {
                    try {
                        if (err) throw err;
                        res.send({ ok: true, results })
                    } catch (error) {
                        res.status(500).send({ ok: false, error })
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}


export async function addFavorite(req: express.Request, res: express.Response) {
    try {
        const book_id = req.body.id;
        const { user } = req.cookies;
        if (!user) {
            res.status(401).send({ ok: false, message: 'User not authenticated' });
            return;
        }

        const secret = process.env.SECRET;
        if (!secret) {
            throw new Error('No secret key');
        }
        const decodedCookie = jwt.decode(user, secret);
        const user_id = decodedCookie.uid;
        const checkQuery = `SELECT * FROM book_store.favorites where user_id = ? and book_id = ?`
        connection.query(checkQuery, [user_id, book_id], (error, results) => {
            if (error) throw error;
            //@ts-ignore
            if (results.length === 0) {
                const insertQuery = 'INSERT INTO book_store.favorites (user_id, book_id) VALUES (?,?)';
                connection.query(insertQuery, [user_id, book_id], (error2, insertResults) => {
                    try {
                        if (error2) throw error2;
                        //@ts-ignore
                        if (insertResults) {
                            const findAddQuery = `SELECT * FROM book_store.books WHERE book_id = ${book_id}`
                            connection.query(findAddQuery, (err2, findResults) => {
                                if (err2) throw err2;
                                if (findResults) {
                                    //@ts-ignore
                                    const likes = findResults[0].likes
                                    const newLikes = parseInt(likes) + 1
                                    const insertQuery = `UPDATE book_store.books SET likes = ${newLikes} WHERE (book_id = ${book_id});`
                                    connection.query(insertQuery, (err3, insertResults) => {
                                        if (err3) throw err3;
                                        res.send(insertResults)
                                    })
                                }
                            })
                        }
                    } catch (error) {
                        res.status(500).send({ ok: false, error: (error as Error).message })

                    }
                })
            }
            else {
                const deleteQuery = `DELETE FROM book_store.favorites
                WHERE user_id = ? AND book_id = ?;`
                connection.query(deleteQuery, [user_id, book_id], (error3, results) => {
                    if (error3) throw error3;
                    if (results) {
                        const findAddQuery = `SELECT * FROM book_store.books WHERE book_id = ${book_id}`
                        connection.query(findAddQuery, (err2, findResults) => {
                            if (err2) throw err2;
                            if (findResults) {
                                //@ts-ignore
                                const likes = findResults[0].likes
                                const newLikes = parseInt(likes) - 1
                                const insertQuery = `UPDATE book_store.books SET likes = ${newLikes} WHERE (book_id = ${book_id});`
                                connection.query(insertQuery, (err3, insertResults) => {
                                    if (err3) throw err3;
                                    res.status(200).send({ ok: true, message: "deleted!" })
                                })
                            }
                        })
                    }
                })
            }
        })
    } catch (error) {

    }
}

export async function sendFavorites(req: express.Request, res: express.Response) {
    const { user } = req.cookies;
    if (!user) {
        res.status(401).send({ ok: false, message: 'User not authenticated' });
        return;
    }

    const secret = process.env.SECRET;
    if (!secret) {
        throw new Error('No secret key');
    }
    const decodedCookie = jwt.decode(user, secret);
    const user_id = decodedCookie.uid;
    const query = `SELECT * FROM book_store.favorites where user_id = ?`


    connection.query(query, [user_id], (error, results) => {
        if (error) throw error;
        res.send({ results })
    })

}


export async function getOneBook(req: express.Request, res: express.Response) {
    const { id } = req.params;
    if (!id) throw new Error("no title");
    try {
        const query = `SELECT * FROM book_store.books WHERE book_id = "${id}";`
        connection.query(query, (err, results) => {
            try {
                if (err) throw err
                res.send({ ok: true, results })
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

export async function getAuthorBooks(req: express.Request, res: express.Response) {
    const author = req.params.authorName;
    const query = `SELECT * FROM book_store.books WHERE author = "${author}"`
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
}

export async function addComment(req: express.Request, res: express.Response) {
    try {
        const comment = req.body.comment;
        const book_id = req.body.book_id;
        const { user } = req.cookies;
        if (!user) {
            res.status(401).send({ ok: false, message: 'User not authenticated' });
            return;
        }

        const secret = process.env.SECRET;
        if (!secret) {
            throw new Error('No secret key');
        }
        const decodedCookie = jwt.decode(user, secret);
        const user_id = decodedCookie.uid;

        const userQuery = `SELECT * FROM book_store.users WHERE uid = "${user_id}"`
        connection.query(userQuery, [user_id, book_id, comment], (error, resultsUser) => {
            if (error) throw error;
            if (resultsUser) {
                //@ts-ignore
                const query = 'INSERT INTO book_store.reviews (user_id, book_id, review,user_name) VALUES (?,?,?,?)';
                //@ts-ignore
                connection.query(query, [user_id, book_id, comment, resultsUser[0].name], (err, results) => {
                    if (err) throw err;
                    res.send({ ok: true, results })
                })
            }
        })

    } catch (error) {
        res.status(500).send({ ok: false, error })  //closer - without it the error could stack in loop
    }
}

export async function getAllComments(req: express.Request, res: express.Response) {
    try {
        const { book_id } = req.params;
        const query = `SELECT * FROM book_store.reviews WHERE book_id = ${book_id}`
        connection.query(query, (err, results) => {
            if (err) throw err;
            res.send({ ok: true, results })
        })
    } catch (error) {
        res.status(500).send({ ok: false, error })
    }
}

export async function search(req: express.Request, res: express.Response) {
    try {
        const search = req.body.search;
        const category = req.body.category
        if (category === "all") {
            const query = 'SELECT * FROM book_store.books WHERE title LIKE ? OR author LIKE ?';
            const searchTerm = `${search}%`;
            connection.query(query, [searchTerm , searchTerm] , (err,results) => {
                if (err) throw err;
                res.send({ok:true , results})
            })
        }
    } catch (error) {
        res.status(500).send({ ok: false, error })

    }
}