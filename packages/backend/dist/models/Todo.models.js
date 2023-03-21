"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var todoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
});
var Todo = mongoose_1.model("Todo", todoSchema);
exports.default = Todo;
//# sourceMappingURL=Todo.models.js.map