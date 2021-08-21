import express from "express";
import { GetAllToDos, CreateToDo } from "../../Controllers/ToDoController";

let Router = express();

Router.route("/").get(GetAllToDos).post(CreateToDo);

export default Router;
