class TodoModel {
  readonly id: string;

  readonly title: string;

  readonly task: string;

  readonly completed: boolean;

  readonly owner: string;

  constructor(
    id: string,
    title: string,
    task: string,
    completed: boolean = false,
    owner: string
  ) {
    this.id = id;
    this.title = title;
    this.task = task;
    this.completed = completed;
    this.owner = owner;
  }
}

const createTodoModel = (todoFromServer: any) =>
  new TodoModel(
    todoFromServer._id,
    todoFromServer.title,
    todoFromServer.task,
    todoFromServer.completed,
    todoFromServer.owner
  );

export { createTodoModel };

export default TodoModel;
