import  express  from 'express';
import connection from './DB/database';
import cors from "cors"
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());


// Require your routes
import userRoutes from "./API/users/userRoutes"
import booksRoutes from "./API/books/booksRoutes"

app.use('/API/books', booksRoutes);
app.use("/API/users", userRoutes)




app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
