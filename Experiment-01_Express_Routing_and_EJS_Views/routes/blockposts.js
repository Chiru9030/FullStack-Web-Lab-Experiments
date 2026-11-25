const express = require("express");
const router =  express.Router();

router.get("/blockposts", (req, res) => {
    res.send("This is Block Posts page");
})



module.exports = router;