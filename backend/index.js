import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

// schema

// routes

app.listen(PORT, () => {
  console.log(`Server is now running on PORT : ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
