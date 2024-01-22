import express from 'express';
import connection from '../../DB/database';

export async function initial(req: express.Request, res: express.Response) {
    try {
        
        const query = `SELECT table_name FROM information_schema.tables WHERE table_name = 'books' AND table_schema = 'book_store';`
        connection.query(query, (err,results) => {
            if (err) throw err;
            //@ts-ignore
            if (results && results.length > 0){
                res.send("collection excist!")
            }
            else{
                const query = `CREATE TABLE book_store.books (
                    book_id INT NOT NULL AUTO_INCREMENT,
                    title VARCHAR(45) NOT NULL,
                    author VARCHAR(45) NOT NULL,
                    pageNum VARCHAR(45) NULL,
                    publisher VARCHAR(45) NULL,
                    description TEXT NULL,
                    image TEXT NULL,
                    likes VARCHAR(45) NULL,
                    genre VARCHAR(45) NOT NULL,
                    PRIMARY KEY (book_id),
                    UNIQUE INDEX book_id_UNIQUE (book_id ASC) VISIBLE
                );`

                connection.query(query, (err,results) => {
                    if (err) throw err;
                    res.send("table of books created!")
                })
            }
        })
    } catch (error) {

    }
}

export async function initialUserSql(req: express.Request, res: express.Response) {
    try {
        
        const query = `SELECT table_name FROM information_schema.tables WHERE table_name = 'users' AND table_schema = 'book_store';`
        connection.query(query, (err,results) => {
            if (err) throw err;
            //@ts-ignore
            if (results && results.length > 0){
                res.send("collection excist!")
            }
            else{
                const query = `CREATE TABLE book_store.users (
                    uid VARCHAR(45) NOT NULL,
                    name VARCHAR(45) NOT NULL,
                    email VARCHAR(45) NOT NULL,
                    img TEXT NULL,
                    password VARCHAR(45) NULL,
                    admin BOOLEAN NOT NULL,
                    PRIMARY KEY (uid),
                    UNIQUE INDEX uid_UNIQUE (uid ASC) VISIBLE
                );`

                connection.query(query, (err,results) => {
                    if (err) throw err;
                    res.send("table of users created!")
                })
            }
        })
    } catch (error) {

    }
}

export async function intialLikesSql(req: express.Request, res: express.Response) {
    try {
        
        const query = `SELECT table_name FROM information_schema.tables WHERE table_name = 'favorites' AND table_schema = 'book_store';`
        connection.query(query, (err,results) => {
            if (err) throw err;
            //@ts-ignore
            if (results && results.length > 0){
                res.send("collection excist!")
            }
            else{
                const query = `CREATE TABLE book_store.favorites (
                    user_id VARCHAR(45) NOT NULL,
                    book_id INT NOT NULL,
                    INDEX user_id_idx (user_id ASC) VISIBLE,
                    INDEX book_id_idx (book_id ASC) VISIBLE,
                    CONSTRAINT user_id
                      FOREIGN KEY (user_id)
                      REFERENCES book_store.users (uid)
                      ON DELETE NO ACTION
                      ON UPDATE NO ACTION,
                    CONSTRAINT book_id
                      FOREIGN KEY (book_id)
                      REFERENCES book_store.books (book_id)
                      ON DELETE NO ACTION
                      ON UPDATE NO ACTION);`

                
                connection.query(query, (err,results) => {
                    if (err) throw err;
                    res.send("table of users created!")
                })
            }
        })
    } catch (error) {

    }
}

export async function intialReviewsSql(req: express.Request, res: express.Response) {
    try {
        
        const query = `SELECT table_name FROM information_schema.tables WHERE table_name = 'reviews' AND table_schema = 'book_store';`
        connection.query(query, (err,results) => {
            if (err) throw err;
            //@ts-ignore
            if (results && results.length > 0){
                res.send("collection excist!")
            }
            else{
                const query = `CREATE TABLE book_store.reviews (
                    user_id VARCHAR(45) NOT NULL,
                    book_id INT NOT NULL,
                    review TEXT NOT NULL,
                    review_id INT NOT NULL AUTO_INCREMENT,
                    user_name VARCHAR(45) NOT NULL,
                    INDEX user_id_idx (user_id ASC) VISIBLE,
                    INDEX book_id_idx (book_id ASC) VISIBLE,
                    PRIMARY KEY (review_id),
                    UNIQUE INDEX review_id_UNIQUE (review_id ASC) VISIBLE,
                    CONSTRAINT user_id_rev
                      FOREIGN KEY (user_id)
                      REFERENCES book_store.users (uid)
                      ON DELETE NO ACTION
                      ON UPDATE NO ACTION,
                    CONSTRAINT book_id_rev
                      FOREIGN KEY (book_id)
                      REFERENCES book_store.books (book_id)
                      ON DELETE NO ACTION
                      ON UPDATE NO ACTION);`

                
                connection.query(query, (err,results) => {
                    if (err) throw err;
                    res.send("table of reviews created!")
                })
            }
        })
    } catch (error) {

    }
}



  