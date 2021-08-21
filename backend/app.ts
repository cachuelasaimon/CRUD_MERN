import express from "express";
import morgan from "morgan";
import cors from "cors";

// MIDDLEWARES
let app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

export default app;
