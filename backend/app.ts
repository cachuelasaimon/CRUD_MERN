import express from "express";
import morgan from "morgan";
import cors from "cors";

// Route Imports
import ToDoRoutes from "./routes/api/todos";

// MIDDLEWARES
let app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Route Middlewares
app.use("/api/todos", ToDoRoutes);

export default app;
