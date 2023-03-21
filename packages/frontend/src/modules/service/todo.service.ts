import { BACKEND_KEYS, QUERY_KEYS } from "../common/consts/app-keys.const";
import { INewTodo, IEditedTodo, IServerTodo } from "../common/types/todo.types";
import HttpService from "./http.service";
import { createTodoModel } from "../models/todo.model";

class TodoService extends HttpService {
  public async getCompletedTodos() {
    const res = await this.get({ url: BACKEND_KEYS.COMPLETED_URL });
    return res.data.map((todo: IServerTodo) => createTodoModel(todo));
  }

  public async getUncompletedTodos() {
    const res = await this.get({ url: BACKEND_KEYS.UNCOMPLETED_URL });
    return res.data.map((todo: IServerTodo) => createTodoModel(todo));
  }

  public async getTodoById(id: string) {
    const res = await this.get({
      url: `${BACKEND_KEYS.TODOS_URL}/${id}`,
    });
    return createTodoModel(res.data);
  }

  public async createTodo(newTodo: INewTodo) {
    const res = this.post({
      url: `${BACKEND_KEYS.TODOS_URL}`,
      data: newTodo,
    });
    return res;
  }

  public updateTodo(id: string, updatedTodo: IEditedTodo) {
    const res = this.patch({
      url: `${BACKEND_KEYS.TODOS_URL}/${id}`,
      data: updatedTodo,
    });
    return res;
  }

  public async deleteTodo(todoId: string) {
    const res = await this.delete({
      url: `${BACKEND_KEYS.TODOS_URL}/${todoId}`,
    });
    return res;
  }
}

const todoService = new TodoService();

export default todoService;
