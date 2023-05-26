const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(port, ()=>{
  console.log(`Ridealong is listening on port ${port}`);
});

app.get("/", (req, res)=>{
  res.render("index");
});

app.get("/login", (req, res)=>{
  res.render("login");
});

app.get("/register", (req, res)=>{
  res.render("register");
});

