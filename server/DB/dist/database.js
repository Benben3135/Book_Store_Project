"use strict";
exports.__esModule = true;
var mysql2_1 = require("mysql2");
var sqlpassword = process.env.SQLPASSWORD;
var connection = mysql2_1["default"].createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: sqlpassword,
    database: "book_store"
});
connection.connect(function (err) {
    try {
        console.log("In connection to my-sql before err");
        if (err)
            throw err;
        console.log("mySQL server is connected");
    }
    catch (error) {
        console.error(error);
    }
});
exports["default"] = connection;
