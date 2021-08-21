import ToDo from "../Models/ToDo";

interface ToDoInterface {
  title: string;
  description?: string;
  createdAt: string;
}

export let GetAllToDos = async (req: any, res: any) => {
  try {
    let todos = await ToDo.find({});
    res.status(200).json({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      msg: "GET ERROR: Get ToDo Error",
    });
  }
};

export let CreateToDo = async (req: any, res: any) => {
  try {
    let new_todo: ToDoInterface = req.body;
    let todo = await ToDo.create(new_todo);
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      msg: "POST ERROR: Create ToDo Failed",
    });
  }
};

export let GetToDoByID = async (req: any, res: any) => {
  try {
    let id = req.params.id;
    let todo = await ToDo.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      msg: "GET ERROR: Get ToDo By ID Error",
    });
  }
};
