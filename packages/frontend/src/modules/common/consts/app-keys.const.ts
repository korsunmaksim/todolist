export const STORAGE_KEYS = {
  TOKEN: "token",
};

export const QUERY_KEYS = {
  COMPLETED_TODOS: "completed",
  UNCOMPLETED_TODOS: "uncompleted",
  TODO: "todo",
  TODOS: "todos",
  USER: "user",
  TODOID: "todoID",
  DELETE_TODO: "delete todo",
  UPDATE_TODO: "update todo",
};

export const BACKEND_KEYS = {
  TODOS_URL: "todos",
  COMPLETED_URL: "todos/completed",
  UNCOMPLETED_URL: "todos/uncompleted",
  USER_URL: "user",
  LOGIN: "user/login",
  REGISTER: "user/register",
  CHANGE_PASSWORD: "user/changepassword",
};

export const ROUTER_KEYS = {
  HOME: "/",
  TODO: "/todo/:id",
  PROFILE: "/profile",
  LOGIN: "/login",
  REGISTER: "/register",
};

export const QUERY_RESPONSES = {
  DELETE_SUCCESS: "Todo was deleted!",
  COMPLETE_SUCCESS: "Todo was completed!",
  UNCOMPLETE_WARNING: "Todo was marked as uncompleted!",
  EDIT_SUCCESS: "Todo was edited!",
  CHANGE_PASSWORD_SUCCESS: "Password was changed!",
  ADD_TODO_SUCCESS: "Todo was added!",
};

export const TODOS_STATE_KEYS = {
  ALL: "all",
  COMPLETED: "completed",
};
