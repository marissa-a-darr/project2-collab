const express = require("express");
const path = require("path");
const router = express.Router();

let initialPath = path.join(__dirname, "public");

router.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "login.html"));
});

// router.post("/", (req, res) => {
//     res.send({data: "User created!" });
// });

// router.put("/", (req, res) => {
//     res.send({data: "User updated!" });
// });

// router.delete("/", (req, res) =>{
//     res.send({data: "User deleted!"});
// });

module.exports = router;