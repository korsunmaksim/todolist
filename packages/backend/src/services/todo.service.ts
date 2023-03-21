import { IUserInfo } from "./../types/user.type";
import { IUser } from "../types/user.type";
import Todo from "../models/Todo.models";
import {
  IDeletedTodoResponse,
  INewTodo,
  ITodo,
  IUpdatedTodo,
  IUpdatedTodoResponse,
} from "../types/todos.type";
import CustomException from "../utils/custom-exception.utils";

export default class TodoService {
  isOwner(todo: ITodo, userInfo: IUserInfo): void {
    if (!(todo.owner == userInfo._id)) {
      throw CustomException.Forbidden("Todo is not accessable");
    }
  }

  async getCompleted(user: IUserInfo): Promise<ITodo[]> {
    const todos = await Todo.find({
      owner: user._id,
      completed: true,
    });
    return todos;
  }

  async getUncompleted(user: IUserInfo): Promise<ITodo[]> {
    const todos = await Todo.find({
      owner: user._id,
      completed: false,
    });
    return todos;
  }

  async create(payload: INewTodo, user: IUserInfo): Promise<ITodo> {
    const newTodo = await Todo.create({
      ...payload,
      completed: false,
      owner: user._id,
    });
    return newTodo;
  }

  async getById(todoId: string, user: IUserInfo): Promise<ITodo> {
    const todo = await Todo.findById(todoId);
    if (!todo) throw CustomException.NotFound("Todo wasn't found");
    this.isOwner(todo, user);
    return todo;
  }

  async update(
    todoId: string,
    updatedPayload: IUpdatedTodo,
    user: IUser
  ): Promise<IUpdatedTodoResponse> {
    const todo = await Todo.findById(todoId);
    if (!todo) throw CustomException.NotFound("Todo wasn't found");
    this.isOwner(todo, user);
    await Todo.updateOne({ _id: todo!._id }, updatedPayload);
    return {
      updatedTodo: updatedPayload,
      message: "Todo was successfully updated",
    };
  }

  async delete(todoId: string, user: IUserInfo): Promise<IDeletedTodoResponse> {
    const todo = await Todo.findById(todoId);
    if (!todo) throw CustomException.NotFound("Todo wasn't found");
    this.isOwner(todo!, user);
    const deletedTodo = await Todo.findByIdAndDelete(todo!._id);
    if (!deletedTodo) throw CustomException.BadRequest("Could't delete todo");
    return { deletedTodo, message: "Todo was successfully deleted" };
  }
}
