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

  getUncompletedTodos(req: IAuthWithoutBodyRequest): Promise<ITodo[]> {
    const todos = this.todoService.getUncompleted(req.user);
    return todos;
  }

  getCompletedTodos(req: IAuthWithoutBodyRequest): Promise<ITodo[]> {
    const todos = this.todoService.getCompleted(req.user);
    return todos;
  }

  getTodo(req: IAuthWithoutBodyRequest): Promise<ITodo> {
    const todo = this.todoService.getById(req.params.id, req.user);
    return todo;
  }

  createTodo(req: IAuthAppRequest<INewTodo>): Promise<ITodo> {
    const newTodo = this.todoService.create(req.body, req.user);
    return newTodo;
  }

  updateTodo(
    req: IAuthAppRequest<IUpdatedTodo>
  ): Promise<IUpdatedTodoResponse> {
    const updatedTodo = this.todoService.update(
      req.params.id,
      req.body,
      req.user
    );
    return updatedTodo;
  }

  deleteTodo(req: IAuthWithoutBodyRequest): Promise<IDeletedTodoResponse> {
    const deletedTodo = this.todoService.delete(req.params.id, req.user);
    return deletedTodo;
  }
}

const todoController = new TodoController(new TodoService());

export default todoController;
