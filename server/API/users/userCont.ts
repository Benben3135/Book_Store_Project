import express from 'express';

import jwt from 'jwt-simple';
import connection from '../../DB/database';

const saltRounds = 10;



export async function register(req: express.Request, res: express.Response) {
    try {
        const userData = req.body;
        const uid = userData.uid;
        const email = userData.email;
        const name = userData.displayName;
        const img = userData.photoURL;

        if (!uid || !email || !name || !img) throw new Error("no data");

        const secret = process.env.SECRET;
        if (!secret) throw new Error("no secret");

        const checkQuery = 'SELECT * FROM book_store.users WHERE uid = ?';

        connection.query(checkQuery, [uid], (err, results) => {
            if (err) throw err;
            //@ts-ignore
            if (results && results.length > 0) {
                console.log(results);
                const cookie = { uid }
                const token = jwt.encode(cookie, secret)
                console.log("creating a cookie of already excisting user!", cookie)

                res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 14 })
                res.send({ ok: true, results })
            } else {
                console.log("user not excist");
                const insertQuery = 'INSERT INTO book_store.users (uid, name, email, img, password) VALUES (?, ?, ?, ?, "")';
                connection.query(insertQuery, [uid, name, email, img], (err2, resultsAdd) => {
                    try {
                        if (err) throw err;
                        //@ts-ignore
                        if (resultsAdd.affectedRows) { //@ts-ignore
                            const queryUser = `SELECT * FROM book_store.users WHERE (uid = ${uid});`
                            connection.query(queryUser, (err2, results) => {
                                if (err2) throw err2;
                                console.log(results)
                                //@ts-ignore
                                const data = uid
                                const cookie = { data }
                                const token = jwt.encode(cookie, secret)
                                console.log("creating a cookie!", cookie)

                                res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 14 })
                                res.send({ ok: true, results })
                            })
                        }
                        else {
                            res.status(401).send({ ok: false, message: "register function failed!" })
                        }

                    } catch (error) {
                        res.status(500).send({ ok: false, error })

                    }
                })
            }
        })
    } catch (error: any) {
        console.error("Error creating user:", error);
        res.status(500).send({ ok: false, error: error.message });
    }
}


export async function getActiveUserData(req: express.Request, res: express.Response) {
    try {
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

        if (!decodedCookie || typeof decodedCookie !== 'object' || !decodedCookie.uid) {
            res.status(401).send({ ok: false, message: 'Invalid user cookie' });
            return;
        }

        const { uid } = decodedCookie;
        console.log(uid)

        const query = `SELECT * FROM book_store.users WHERE uid = ?`;
        connection.query(query, [uid], (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                //@ts-ignore
                res.status(200).send({ ok: true, userData: results[0] });
            } catch (error) {
                res.status(500).send({ ok: false, error: (error as Error).message });
            }
        });
    } catch (error) {
        console.error('Error getting active user data:', error);
        res.status(500).send({ ok: false, error: (error as Error).message });
    }
}

export async function login(req: express.Request, res: express.Response) {
    try {
        const userData = req.body;
        console.log(userData)
        const uid = userData.uid;
        const email = userData.email;
        const name = userData.displayName;
        const img = userData.img;
        console.log(uid, email, name, img)

        if (!uid || !email || !name || !img) throw new Error("no data")
        const secret = process.env.SECRET
        if (!secret) throw new Error("no secret!")

        const query = `SELECT * FROM book_store.users WHERE uid = "${uid}";`

        connection.query(query, (err, results) => {
            if (err) throw err;
            //@ts-ignore
            if (results && results.length > 0) {
                console.log(results);
                const cookie = { uid }
                const token = jwt.encode(cookie, secret)
                console.log("creating a cookie!", cookie)

                res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 14 })
                res.send({ ok: true, results })
            } else {
                console.log("No results");
                res.status(500).send({ ok: false, message: "user never registered!" });
            }
        })
    } catch (error) {
        res.status(500).send({ ok: false, error: (error as Error).message });
    }
}

export async function deleteUser(req: express.Request, res: express.Response) {
    try {
        const { uid } = req.body
        const query = `DELETE FROM book_store.users WHERE uid = "${uid}";`
        connection.query(query, (err, results) => {
            if (err) throw err;
            res.status(200).send({ ok: true, message: "user deleted!" })
        })
    } catch (error) {

    }
}

export async function changeUserName(req: express.Request, res: express.Response) {
    const { newName } = req.body;
    const { uid } = req.body;
    console.log(newName, uid)
    const query = `UPDATE book_store.users SET name = '${newName}' WHERE (uid = '${uid}');`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        //@ts-ignore
        const queryUser = `SELECT * FROM book_store.users WHERE (uid = '${uid}');`;
        connection.query(queryUser, (err2, results) => {
            if (err2) throw err2;
            res.send({ ok: true, results })
        })

    })
}