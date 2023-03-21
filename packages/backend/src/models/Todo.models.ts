import { Model, model, Schema } from "mongoose";
import { ITodo } from "../types/todos.type";

const todoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo: Model<ITodo> = model<ITodo>("Todo", todoSchema);

export default Todo;
