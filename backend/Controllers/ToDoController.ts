import ToDo from "../Models/ToDo";

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
