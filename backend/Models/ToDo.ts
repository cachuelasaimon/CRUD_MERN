import mongoose from "mongoose";

let ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title Field is Missing"],
  },
  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: [true, "Created At Field in Missing"],
  },
});

let ToDo = mongoose.model("ToDo", ToDoSchema);

export default ToDo;
