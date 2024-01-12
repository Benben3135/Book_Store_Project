"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var booksCont_1 = require("./booksCont");
router
    .get("", booksCont_1.getAllBooks)
    .get("/getFavorites", booksCont_1.sendFavorites)
    .post("/addBooks", booksCont_1.createBook)
    .post("/addFavorite", booksCont_1.addFavorite);
//good routing example :/api/users
// .get("") <-- to get ALL users 
// .get("/:id") <-- to get a specific user by the id
// .post("") <-- create a user
// .patch("/:id") <-- update a specific field ot information in a user 
// .put("/:id") <-- update entire user
// .delete(/:id) <-- delete by id
exports["default"] = router;
