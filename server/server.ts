import express from 'express';
// import { books } from './util/books';
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());



// Require your routes
import userRoutes from "./API/users/userRoutes"
import booksRoutes from "./API/books/booksRoutes"

app.use('/api/books', booksRoutes);
app.use('/api/users', userRoutes)

app.get('api/check', (req, res) => {
    res.status(200).send({ message: "Server is running and check passed" });
});


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
