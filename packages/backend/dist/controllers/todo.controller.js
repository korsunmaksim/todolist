"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
var todo_service_1 = __importDefault(require("../services/todo.service"));
var TodoController = /** @class */ (function () {
    function TodoController(todoService) {
        this.todoService = todoService;
    }
    TodoController.prototype.getUncompletedTodos = function (req) {
        var todos = this.todoService.getUncompleted(req.user);
        return todos;
    };
    TodoController.prototype.getCompletedTodos = function (req) {
        var todos = this.todoService.getCompleted(req.user);
        return todos;
    };
    TodoController.prototype.getTodo = function (req) {
        var todo = this.todoService.getById(req.params.id, req.user);
        return todo;
    };
    TodoController.prototype.createTodo = function (req) {
        var newTodo = this.todoService.create(req.body, req.user);
        return newTodo;
    };
    TodoController.prototype.updateTodo = function (req) {
        var updatedTodo = this.todoService.update(req.params.id, req.body, req.user);
        return updatedTodo;
    };
    TodoController.prototype.deleteTodo = function (req) {
        var deletedTodo = this.todoService.delete(req.params.id, req.user);
        return deletedTodo;
    };
    return TodoController;
}());
exports.TodoController = TodoController;
var todoController = new TodoController(new todo_service_1.default());
exports.default = todoController;
//# sourceMappingURL=todo.controller.js.map