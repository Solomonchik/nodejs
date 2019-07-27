const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyOarse = require("body-parser");
require("dotenv/config");

const postsRoute = require("./routes/posts");

app.use(bodyOarse.json());
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Hallo NodeJS");
});

app.get("/posts", (req, res) => {
  res.send("Hallo Posts Page");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to database")
);

app.listen(3000);
