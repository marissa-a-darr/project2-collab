const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({data: "Here is your data" });
});

router.post("/", (req, res) => {
    res.send({data: "User created!" });
});

router.put("/", (req, res) => {
    res.send({data: "User updated!" });
});

router.delete("/", (req, res) =>{
    res.send({data: "User deleted!" });
});

module.exports = router;