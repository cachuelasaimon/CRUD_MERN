import express from "express";
import { GetAllToDos } from "../../Controllers/ToDoController";

let Router = express();

Router.route("/").get(GetAllToDos);

export default Router;
