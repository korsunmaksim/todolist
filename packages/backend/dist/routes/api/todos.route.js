"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var isExist_middleware_1 = require("../../middleware/isExist.middleware");
var todo_controller_1 = __importDefault(require("../../controllers/todo.controller"));
var trycatch_middleware_1 = require("../../middleware/trycatch.middleware");
var generic_middleware_1 = require("../../middleware/generic.middleware");
var checkToken_middleware_1 = require("../../middleware/checkToken.middleware");
var Todo_models_1 = __importDefault(require("../../models/Todo.models"));
var todosRouter = express_1.Router();
todosRouter.get("/completed", checkToken_middleware_1.checkToken, trycatch_middleware_1.checkErrors(todo_controller_1.default.getCompletedTodos.bind(todo_controller_1.default)));
todosRouter.get("/uncompleted", checkToken_middleware_1.checkToken, trycatch_middleware_1.checkErrors(todo_controller_1.default.getUncompletedTodos.bind(todo_controller_1.default)));
todosRouter.get("/:id", checkToken_middleware_1.checkToken, isExist_middleware_1.isExist(Todo_models_1.default), trycatch_middleware_1.checkErrors(todo_controller_1.default.getTodo.bind(todo_controller_1.default)));
todosRouter.post("", checkToken_middleware_1.checkToken, generic_middleware_1.checkGeneric(generic_middleware_1.newTodoSchema), trycatch_middleware_1.checkErrors(todo_controller_1.default.createTodo.bind(todo_controller_1.default)));
todosRouter.patch("/:id", checkToken_middleware_1.checkToken, isExist_middleware_1.isExist(Todo_models_1.default), generic_middleware_1.checkGeneric(generic_middleware_1.updatedTodoSchema), trycatch_middleware_1.checkErrors(todo_controller_1.default.updateTodo.bind(todo_controller_1.default)));
todosRouter.delete("/:id", checkToken_middleware_1.checkToken, isExist_middleware_1.isExist(Todo_models_1.default), trycatch_middleware_1.checkErrors(todo_controller_1.default.deleteTodo.bind(todo_controller_1.default)));
exports.default = todosRouter;
//# sourceMappingURL=todos.route.js.map