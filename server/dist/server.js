"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { books } from './../src/util/books';
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware
app.use(express_1.default.json());
// Require your routes
const booksRoutes_1 = __importDefault(require("./API/booksRoutes"));
const userRoutes_1 = __importDefault(require("./API/users/userRoutes"));
// Use routes
app.use('/api/books', booksRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
