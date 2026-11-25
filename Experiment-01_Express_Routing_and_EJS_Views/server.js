const express = require("express");
const app = express();


app.set("view engine", "ejs")
app.listen(3000)

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    console.log("Hello")
    //res.send("Hello")
    //res.sendStatus(500, 200, 201, 404, 400)
    res.status(200).send("This is a custom message")
})
app.get("/users", (req, res) => {
    //res.send("This is Users page")
    //res.download("/Users/chiranjeevi/FST LAB/CHIRANJEEVI METHUKU OFFCIAL PHOTO.jpeg")
    res.render("index", { text123: "Chiru" });
})
app.get("/users", (req, res) => {
    res.send("This is Users page")
})
app.get("/user/new", (req, res) => {
    res.send("This is New User page")
})

const userRouter = require("./routes/users")
app.use("/users", userRouter)

const blockpostsRouter = require("./routes/blockposts")
app.use("/blockposts", blockpostsRouter)

app.use(express.static("public"));






