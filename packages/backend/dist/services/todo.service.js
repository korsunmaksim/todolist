"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Todo_models_1 = __importDefault(require("../models/Todo.models"));
var custom_exception_utils_1 = __importDefault(require("../utils/custom-exception.utils"));
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    TodoService.prototype.isOwner = function (todo, userInfo) {
        if (!(todo.owner == userInfo._id)) {
            throw custom_exception_utils_1.default.Forbidden("Todo is not accessable");
        }
    };
    TodoService.prototype.getCompleted = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var todos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Todo_models_1.default.find({
                            owner: user._id,
                            completed: true,
                        })];
                    case 1:
                        todos = _a.sent();
                        return [2 /*return*/, todos];
                }
            });
        });
    };
    TodoService.prototype.getUncompleted = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var todos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Todo_models_1.default.find({
                            owner: user._id,
                            completed: false,
                        })];
                    case 1:
                        todos = _a.sent();
                        return [2 /*return*/, todos];
                }
            });
        });
    };
    TodoService.prototype.create = function (payload, user) {
        return __awaiter(this, void 0, void 0, function () {
            var newTodo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Todo_models_1.default.create(__assign(__assign({}, payload), { completed: false, owner: user._id }))];
                    case 1:
                        newTodo = _a.sent();
                        return [2 /*return*/, newTodo];
                }
            });
        });
    };
    TodoService.prototype.getById = function (todoId, user) {
        return __awaiter(this, void 0, void 0, function () {
            var todo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Todo_models_1.default.findById(todoId)];
                    case 1:
                        todo = _a.sent();
                        if (!todo)
                            throw custom_exception_utils_1.default.NotFound("Todo wasn't found");
                        this.isOwner(todo, user);
                        return [2 /*return*/, todo];
                }
            });
        });
    };
    TodoService.prototype.update = function (todoId, updatedPayload, user) {
        return __awaiter(this, void 0, void 0, function () {
            var todo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Todo_models_1.default.findById(todoId)];
                    case 1:
                        todo = _a.sent();
                        if (!todo)
                            throw custom_exception_utils_1.default.NotFound("Todo wasn't found");
                        this.isOwner(todo, user);
                        return [4 /*yield*/, Todo_models_1.default.updateOne({ _id: todo._id }, updatedPayload)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                updatedTodo: updatedPayload,
                                message: "Todo was successfully updated",
                            }];
                }
            });
        });
    };
    TodoService.prototype.delete = function (todoId, user) {
        return __awaiter(this, void 0, void 0, function () {
            var todo, deletedTodo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Todo_models_1.default.findById(todoId)];
                    case 1:
                        todo = _a.sent();
                        if (!todo)
                            throw custom_exception_utils_1.default.NotFound("Todo wasn't found");
                        this.isOwner(todo, user);
                        return [4 /*yield*/, Todo_models_1.default.findByIdAndDelete(todo._id)];
                    case 2:
                        deletedTodo = _a.sent();
                        if (!deletedTodo)
                            throw custom_exception_utils_1.default.BadRequest("Could't delete todo");
                        return [2 /*return*/, { deletedTodo: deletedTodo, message: "Todo was successfully deleted" }];
                }
            });
        });
    };
    return TodoService;
}());
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map