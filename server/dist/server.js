"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import { books } from './util/books';
require('dotenv').config();
const app = express_1.default();
const PORT = process.env.PORT || 4000;
// Middleware
app.use(express_1.default.json());
app.use(cors_1.default({
    origin: 'http://localhost:5173',
}));
app.use(cookie_parser_1.default());
const userRoutes_1 = __importDefault(require("./API/users/userRoutes"));
const booksRoutes_1 = __importDefault(require("./API/books/booksRoutes"));
app.use('/api/books', booksRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.get('/api/check', (req, res) => {
    res.status(200).json({ message: "Server is running and check passed" });
});
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
