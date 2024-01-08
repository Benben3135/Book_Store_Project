import express from 'express';

import jwt from 'jwt-simple';
import connection from '../../DB/database';

const saltRounds = 10;



export async function register(req: express.Request, res: express.Response) {
    try {
        const userData = req.body;
        console.log(userData)
        const uid = userData.uid;
        const email = userData.email;
        const name = userData.displayName;
        const img = userData.photoURL;
        console.log(uid, email, name, img)

        if (!uid || !email || !name || !img) throw new Error("no data")

        const secret = process.env.SECRET
        if (!secret) throw new Error("no secret")

        const query = `INSERT INTO book_store.users (uid,name,email,img,password) VALUES ('${uid}','${name}','${email}','${img}',"");`;
        connection.query(query, (err, resultsAdd) => {
            try {
                if (err) throw err;
                //@ts-ignore
                if (resultsAdd.affectedRows) { //@ts-ignore
                    const queryUser = `SELECT * FROM book_store.users WHERE uid = ${resultsAdd.insertId}`
                    connection.query(queryUser, (err2, results) => {
                        if (err2) throw err2;
                        //@ts-ignore
                        const cookie = { uid: resultsAdd.insertId }
                        const token = jwt.encode(cookie, secret)

                        res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 14 })
                        res.send({ ok: true, results })
                    })
                }

            } catch (error) {
                res.status(500).send({ ok: false, error })

            }
        })


        // res.status(200).send({ message: "User created successfully" });
    } catch (error: any) {
        console.error("Error creating user:", error);
        res.status(500).send({ ok: false, error: error.message });
    }
}


export async function getActiveUserData(req: express.Request, res: express.Response) {
    try {
        const {user} = req.cookies;
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

        const {uid} = decodedCookie;
        res.status(500).send({uid})

        // const query = `SELECT * FROM book_store.users WHERE uid = ?`;
//         connection.query(query, [uid], (err, results) => {
//             try {
//                 if (err) {
//                     throw err;
//                 }
// //@ts-ignore
//                 res.status(200).send({ ok: true, userData: results[0] });
//             } catch (error) {
//                 res.status(500).send({ ok: false, error: (error as Error).message });
//             }
//         });
    } catch (error) {
        console.error('Error getting active user data:', error);
        res.status(500).send({ ok: false, error: (error as Error).message });
    }
}