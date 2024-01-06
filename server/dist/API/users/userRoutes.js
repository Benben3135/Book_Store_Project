"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userCont_1 = require("./userCont");
const router = express_1.default.Router();
router.get("", () => { })
    .post("/create-newuser", userCont_1.createNewUser);
exports.default = router;
