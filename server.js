// Here is where we import modules
// We begin by loading Express
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose")

const Fruit= require("./models/fruit.js")

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});




// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });

  // server.js

// GET /fruits/new
// server.js
// server.js

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
  });
  // server.js

  app.post("/fruits", async (req, res) => {
    if (req.body.isReadyToEat === "on") {
      req.body.isReadyToEat = true;
    } else {
      req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits/new");
  });
  
  
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
