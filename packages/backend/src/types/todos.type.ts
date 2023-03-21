export interface ITodo {
  _id: string;
  title: string;
  task: string;
  completed: boolean;
  owner: string;
}

export interface INewTodo {
  title: string;
  task: string;
}

export interface IUpdatedTodo {
  title: string;
  task: string;
  completed: boolean;
}

export interface ITodoResponse {
  message: string;
}

export interface IUpdatedTodoResponse extends ITodoResponse {
  updatedTodo: IUpdatedTodo;
}

export interface IDeletedTodoResponse extends ITodoResponse {
  deletedTodo: ITodo;
}
