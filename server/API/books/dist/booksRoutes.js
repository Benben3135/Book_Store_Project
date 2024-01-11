"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var booksCont_1 = require("./booksCont");
router
    .get("", booksCont_1.getAllBooks)
    .post("/addBooks", booksCont_1.createBook)
    .get("/:title", booksCont_1.getOneBook); //<-- to get a specific book by its title
//good routing example :/api/users
// .get("") <-- to get ALL users 
//.get("/:id") <-- to get a specific user by its id
// .post("") <-- create a user
// .patch("/:id") <-- update a specific field ot information in a user 
// .put("/:id") <-- update entire user
// .delete(/:id) <-- delete by id
exports["default"] = router;
