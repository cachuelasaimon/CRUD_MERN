import express from "express";
import {
  GetAllToDos,
  CreateToDo,
  GetToDoByID,
  UpdateToDo,
} from "../../Controllers/ToDoController";

let Router = express();

Router.route("/").get(GetAllToDos).post(CreateToDo);

Router.route("/:id").get(GetToDoByID).patch(UpdateToDo);

export default Router;
