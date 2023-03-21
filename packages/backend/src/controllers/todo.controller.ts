import TodoService from "../services/todo.service";
import {
  IAuthAppRequest,
  IAuthWithoutBodyRequest,
} from "../types/customRequest.type";
import {
  INewTodo,
  IUpdatedTodo,
  ITodo,
  IUpdatedTodoResponse,
  IDeletedTodoResponse,
} from "../types/todos.type";

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getUncompletedTodos(req: IAuthWithoutBodyRequest): Promise<ITodo[]> {
    const todos = await this.todoService.getUncompleted(req.user);
    return todos;
  }

  async getCompletedTodos(req: IAuthWithoutBodyRequest): Promise<ITodo[]> {
    const todos = await this.todoService.getCompleted(req.user);
    return todos;
  }

  async getTodo(req: IAuthWithoutBodyRequest): Promise<ITodo> {
    const todo = await this.todoService.getById(req.params.id, req.user);
    return todo;
  }

  async createTodo(req: IAuthAppRequest<INewTodo>): Promise<ITodo> {
    const newTodo = await this.todoService.create(req.body, req.user);
    return newTodo;
  }

  async updateTodo(
    req: IAuthAppRequest<IUpdatedTodo>
  ): Promise<IUpdatedTodoResponse> {
    const updatedTodo = await this.todoService.update(
      req.params.id,
      req.body,
      req.user
    );
    return updatedTodo;
  }

  async deleteTodo(
    req: IAuthWithoutBodyRequest
  ): Promise<IDeletedTodoResponse> {
    const deletedTodo = await this.todoService.delete(req.params.id, req.user);
    return deletedTodo;
  }
}

const todoController = new TodoController(new TodoService());

export default todoController;
