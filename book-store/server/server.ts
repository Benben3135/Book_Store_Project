import  express  from 'express';
// import { books } from './../src/util/books';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Require your routes
import booksRoutes from "./API/booksRoutes"
import userRoutes from "./API/users/userRoutes"

// Use routes
app.use('/api/books', booksRoutes);
app.use("/api/users", userRoutes)



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
