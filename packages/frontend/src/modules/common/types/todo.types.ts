export interface ITodo {
  id: string;
  title: string;
  task: string;
  completed: boolean;
  owner: string;
}

export interface IServerTodo {
  _id: string;
  title: string;
  task: string;
  completed: boolean;
  owner: string;
}

export interface IEditedTodo {
  title: string;
  task: string;
  completed: boolean;
}

export interface INewTodo extends IEditedTodo {}

export interface ITodosProps {
  todos: ITodo[];
}

export interface IAddModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IEditModalProps extends IAddModalProps {
  todo: ITodo;
}
