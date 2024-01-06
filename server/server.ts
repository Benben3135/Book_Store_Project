import  express  from 'express';
const cors = require('cors');


// import { books } from './../src/util/books';
require('dotenv').config();

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
  };

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors(corsOptions));


// Require your routes
import userRoutes from "./API/users/userRoutes"
app.use("/API/users", userRoutes)

import booksRoutes from "./API/booksRoutes"
app.use('/API/books', booksRoutes);








app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
