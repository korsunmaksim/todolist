import { Router } from "express";
import { isExist } from "../../middleware/isExist.middleware";
import todoController from "../../controllers/todo.controller";
import { checkErrors } from "../../middleware/trycatch.middleware";
import {
  checkGeneric,
  newTodoSchema,
  updatedTodoSchema,
} from "../../middleware/generic.middleware";
import { checkToken } from "../../middleware/checkToken.middleware";
import Todo from "../../models/Todo.models";

const todosRouter: Router = Router();

todosRouter.get(
  "/completed",
  checkToken,
  checkErrors(todoController.getCompletedTodos.bind(todoController))
);

todosRouter.get(
  "/uncompleted",
  checkToken,
  checkErrors(todoController.getUncompletedTodos.bind(todoController))
);

todosRouter.get(
  "/:id",
  checkToken,
  isExist(Todo),
  checkErrors(todoController.getTodo.bind(todoController))
);

todosRouter.post(
  "",
  checkToken,
  checkGeneric(newTodoSchema),
  checkErrors(todoController.createTodo.bind(todoController))
);

todosRouter.patch(
  "/:id",
  checkToken,
  isExist(Todo),
  checkGeneric(updatedTodoSchema),
  checkErrors(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  "/:id",
  checkToken,
  isExist(Todo),
  checkErrors(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
