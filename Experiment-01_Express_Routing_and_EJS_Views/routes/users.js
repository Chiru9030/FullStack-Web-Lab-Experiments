const express = require("express");
const router = express.Router();

const users = [];


router.get("/blockposts", (req, res) => {
    res.send("This is Block Posts page");
})

router.get("/users", (req, res) => {
    res.send("This is Users page")
})

router.get("/", (req, res) => {
    res.send("This is Users page")
})

router.get("/new", (req, res) => {
    res.render("users/new",)
})

router.post("/", (req, res) => {
    //res.send("This is Users page")
    const isValid = true;
    if (isValid) {
        users.push({ firstname: req.body.firstname })
        res.redirect(`/users/${users.length - 1}`)
    }
    else {
        console.log("Error");
        res.render("users/new", { name: req.body.firstname })
    }
    console.log(req.body.firstname);
    res.send("hey")
})


module.exports = router;
