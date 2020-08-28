const express = require("express");
const app = express();

app.listen(3000, () => console.log("Server is started"));

// First get request using express
app.get("/", (req, res) => {
    res.send("<h1>Hello, world</h1>");
});

app.get("/contact", (req, res) => {
    res.send("contact me at: abhis1497@gmail.com");
});

app.get("/about", (req, res) => {
    res.send("Hi, I am Abhishek Shrivastava and I am creating my first express js server.")
})