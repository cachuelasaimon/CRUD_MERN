import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config({ path: "./config.env" });

let port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server Started on Port: ${port}`));
