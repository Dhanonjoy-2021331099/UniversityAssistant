const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/login", (req, res) => {

    res.sendFile(
        path.join(__dirname, "../../frontend/login.html")
    );

});

router.get("/register", (req, res) => {

    res.sendFile(
        path.join(__dirname, "../../frontend/register.html")
    );

});

module.exports = router;