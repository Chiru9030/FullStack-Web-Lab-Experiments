const express = require("express");
const app = express();

app.use(express.json());

// Route 1 - Home
app.get("/", (req, res) => {
    res.send("Home Page");
});

// Route 2 - About
app.get("/about", (req, res) => {
    res.send("About Page");
});

// Route 3 - Contact
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
