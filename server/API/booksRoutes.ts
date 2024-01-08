import express from "express"
const router = express.Router()

router
.get("", () => {})  //ALL
// .post("", creatAllBooks)  //tamar


//good routing example :/api/users
// .get("") <-- to get ALL users 
// .get("/:id") <-- to get a specific user by the id
// .post("") <-- create a user
// .patch("/:id") <-- update a specific field ot information in a user 
// .put("/:id") <-- update entire user
// .delete(/:id) <-- delete by id

export default router