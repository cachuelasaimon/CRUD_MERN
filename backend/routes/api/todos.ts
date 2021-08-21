import express from "express";
import {
  GetAllToDos,
  CreateToDo,
  GetToDoByID,
} from "../../Controllers/ToDoController";

let Router = express();

Router.route("/").get(GetAllToDos).post(CreateToDo);

Router.route("/:id").get(GetToDoByID);

export default Router;
