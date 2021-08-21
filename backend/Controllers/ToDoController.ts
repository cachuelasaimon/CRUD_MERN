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
    console.log(err);
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
    console.log(err);
  }
};
