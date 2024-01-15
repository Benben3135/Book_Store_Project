"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getAuthorBooks = exports.getOneBook = exports.sendFavorites = exports.addFavorite = exports.createBook = exports.getAllBooks = exports.addAllBooks = void 0;
var database_1 = require("../../DB/database");
var books_1 = require("../../util/books");
var jwt_simple_1 = require("jwt-simple");
var saltRounds = 10;
function addAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // Use Promise.all to wait for all queries to finish
                    return [4 /*yield*/, Promise.all(books_1.books.map(function (book) { return __awaiter(_this, void 0, void 0, function () {
                            var insertQuery, queryPromise;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        insertQuery = 'INSERT INTO book_store.books (title, author, pageNum, publisher, description, image, likes,genre) VALUES (?, ?, ?, ?, ?, ?, ?)';
                                        queryPromise = new Promise(function (resolve, reject) {
                                            database_1["default"].query(insertQuery, [book.title, book.author, book.pageNum, book.publisher, book.description, book.image, book.likes, book.genre], function (err, resultsAdd) {
                                                if (err)
                                                    reject(err);
                                                else
                                                    resolve(resultsAdd);
                                            });
                                        });
                                        return [4 /*yield*/, queryPromise];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    // Use Promise.all to wait for all queries to finish
                    _a.sent();
                    // Send a response when all queries are complete
                    res.status(200).send({ ok: true, message: 'All books added successfully' });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    res.status(500).send({ ok: false, error: error_1 }); // Handle errors more gracefully in a production environment
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addAllBooks = addAllBooks;
function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var query;
        return __generator(this, function (_a) {
            try {
                query = "SELECT * FROM book_store.books";
                database_1["default"].query(query, function (err, results) {
                    try {
                        if (err)
                            throw err;
                        res.send({ ok: true, results: results });
                    }
                    catch (error) {
                        console.log(error);
                        res.status(500).send({ ok: false, error: error });
                    }
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).send({ ok: false, error: error }); //closer - without it the error could stack in loop
            }
            return [2 /*return*/];
        });
    });
}
exports.getAllBooks = getAllBooks;
function createBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var bookData, _a, title_1, author_1, pageNum_1, publisher_1, description_1, image_1, likes_1, genre_1, checkQuery;
        return __generator(this, function (_b) {
            try {
                bookData = req.body;
                _a = req.body, title_1 = _a.title, author_1 = _a.author, pageNum_1 = _a.pageNum, publisher_1 = _a.publisher, description_1 = _a.description, image_1 = _a.image, likes_1 = _a.likes, genre_1 = _a.genre;
                if (!title_1 || !author_1 || !image_1)
                    throw new Error("no data in FUNCTION createAllBook in file booksCtrl.ts");
                checkQuery = "SELECT * FROM book_store.books WHERE  title = ?";
                database_1["default"].query(checkQuery, [title_1], function (err, results) {
                    if (err)
                        throw err;
                    //@ts-ignore
                    if (results.length > 0) {
                        res.status(409).send({ ok: false, message: "Book already exists" });
                    }
                    else {
                        var query = "INSERT INTO book_store.books (title, author, pageNum, publisher, description, image, likes,genre) VALUES ('" + title_1 + "', '" + author_1 + "', " + pageNum_1 + ", '" + publisher_1 + "', \"" + description_1 + "\", '" + image_1 + "', " + likes_1 + " , '" + genre_1 + "');";
                        database_1["default"].query(query, function (err, results) {
                            try {
                                if (err)
                                    throw err;
                                res.send({ ok: true, results: results });
                            }
                            catch (error) {
                                res.status(500).send({ ok: false, error: error });
                            }
                        });
                    }
                });
            }
            catch (error) {
                res.status(500).send({ ok: false, error: error });
            }
            return [2 /*return*/];
        });
    });
}
exports.createBook = createBook;
function addFavorite(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var book_id_1, user, secret, decodedCookie, user_id_1, checkQuery;
        return __generator(this, function (_a) {
            try {
                book_id_1 = req.body.id;
                user = req.cookies.user;
                if (!user) {
                    res.status(401).send({ ok: false, message: 'User not authenticated' });
                    return [2 /*return*/];
                }
                secret = process.env.SECRET;
                if (!secret) {
                    throw new Error('No secret key');
                }
                decodedCookie = jwt_simple_1["default"].decode(user, secret);
                user_id_1 = decodedCookie.uid;
                checkQuery = "SELECT * FROM book_store.favorites where user_id = ? and book_id = ?";
                database_1["default"].query(checkQuery, [user_id_1, book_id_1], function (error, results) {
                    if (error)
                        throw error;
                    //@ts-ignore
                    if (results.length === 0) {
                        var insertQuery = 'INSERT INTO book_store.favorites (user_id, book_id) VALUES (?,?)';
                        database_1["default"].query(insertQuery, [user_id_1, book_id_1], function (error2, insertResults) {
                            try {
                                if (error2)
                                    throw error2;
                                //@ts-ignore
                                res.send(insertResults);
                            }
                            catch (error) {
                                res.status(500).send({ ok: false, error: error.message });
                            }
                        });
                    }
                    else {
                        var deleteQuery = "DELETE FROM book_store.favorites\n                WHERE user_id = ? AND book_id = ?;";
                        database_1["default"].query(deleteQuery, [user_id_1, book_id_1], function (error3, results) {
                            if (error3)
                                throw error3;
                            res.status(200).send({ ok: true, message: "deleted!" });
                        });
                    }
                });
            }
            catch (error) {
            }
            return [2 /*return*/];
        });
    });
}
exports.addFavorite = addFavorite;
function sendFavorites(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, secret, decodedCookie, user_id, query;
        return __generator(this, function (_a) {
            user = req.cookies.user;
            if (!user) {
                res.status(401).send({ ok: false, message: 'User not authenticated' });
                return [2 /*return*/];
            }
            secret = process.env.SECRET;
            if (!secret) {
                throw new Error('No secret key');
            }
            decodedCookie = jwt_simple_1["default"].decode(user, secret);
            user_id = decodedCookie.uid;
            query = "SELECT * FROM book_store.favorites where user_id = ?";
            database_1["default"].query(query, [user_id], function (error, results) {
                if (error)
                    throw error;
                console.log("sendFavorites results is:", results);
                res.send({ results: results });
            });
            return [2 /*return*/];
        });
    });
}
exports.sendFavorites = sendFavorites;
function getOneBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, query;
        return __generator(this, function (_a) {
            id = req.params.id;
            console.log("id I got from client is:", id);
            if (!id)
                throw new Error("no title");
            try {
                query = "SELECT * FROM book_store.books WHERE book_id = \"" + id + "\";";
                database_1["default"].query(query, function (err, results) {
                    try {
                        if (err)
                            throw err;
                        res.send({ ok: true, results: results });
                    }
                    catch (error) {
                        console.log(error);
                        res.status(500).send({ ok: false, error: error });
                    }
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).send({ ok: false, error: error }); //closer - without it the error could stack in loop
            }
            return [2 /*return*/];
        });
    });
}
exports.getOneBook = getOneBook;
function getAuthorBooks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var author, query;
        return __generator(this, function (_a) {
            author = req.params.authorName;
            query = "SELECT * FROM book_store.books WHERE author = \"" + author + "\"";
            database_1["default"].query(query, function (err, results) {
                if (err)
                    throw err;
                res.send(results);
            });
            return [2 /*return*/];
        });
    });
}
exports.getAuthorBooks = getAuthorBooks;
