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
                    description VARCHAR(10000) NULL,
                    image VARCHAR(255) NOT NULL,
                    likes VARCHAR(45) NULL,
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

