"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const sqlpassword = process.env.SQLPASSWORD;
const connection = mysql2_1.default.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: sqlpassword,
    database: "library"
});
connection.connect((err) => {
    try {
        if (err)
            throw err;
        console.log("mySQL server is connected");
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = connection;
