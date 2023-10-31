import express from "express";
import { PORT, SECRET_KEY } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "./models/usersSchema.js";

// conect to express app
const app = express();

// conect to mongoDB
const conectDB = async () => {
  try {
    console.time("mongoDB conected in ");
    await mongoose.connect(
      `mongodb+srv://user:6oTA5HWYFMPRbOL2@auth.fsax3kd.mongodb.net/UsersDB?retryWrites=true&w=majority`
    );
    console.log("Conected to mongo DB");
    console.timeEnd("mongoDB conected in ");
  } catch (error) {
    console.log(error);
  }
};
conectDB();
// middleware
// app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// schema

// routes
// user
// POST register
app.post("/register", async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, userName, password: hashedPassword });
    const createUser = await newUser.save();
    return res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error siging up" });
  }
});

// GET registered
app.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting the users" });
  }
});

// GET login
app.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login succesfuly" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in loggin in" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is now running on PORT : ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
