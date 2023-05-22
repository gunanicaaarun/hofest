const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookie = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const http = require("http");
const PORT = 3000;

//MIDDLE WARES
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

const mongoURL = "mongodb://localhost:27017/test"; // Update with your MongoDB connection URL and database name
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


mongoose
  .connect(mongoURL, mongoOptions)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    age: Number,
    userid: Number,
  })
);



app.get("/", (req, res) => {
  res.json("welcome to this page");
});



app.get("/getUsers", (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error("Error retrieving users:", err);
      res.status(500).send("Error retrieving users");
      return;
    });
});



app.post("/addUser", (req, res) => {
  const id = Number.parseInt(Math.round(Math.random() * 100000 + 1));
  console.log(id);
  const [name, age] = Object.values(req.body);
  const newUser = User({
    name,
    age,
    id,
  });
  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: "User created sucessfully!" });
    })
    .catch((err) => {
      console.log("Error creating the user: ", err.message);
    });
});



app.delete("/deleteUser/:id", (req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).json({ message: "User deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      res.status(500).send("Error deleting user");
    });
});



app.put("/updateUser/:id", (req, res) => {
  const userId = req.params.id;
  const newName = req.body.name;
  User.findByIdAndUpdate(userId, { name: newName }, { new: true })
    .then(() => {
      res.status(200).json({ message: "User updated successfully" });
    })
    .catch((error) => {
      console.error("Error upating user:", error);
      res.status(500).send("Error updating user");
    });
});
