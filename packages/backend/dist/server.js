"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var routes_1 = __importDefault(require("./routes"));
var database_1 = __importDefault(require("./config/database"));
var cors = require("cors");
var app = express_1.default();
var router = new routes_1.default(app);
database_1.default();
app.set("port", process.env.PORT || 5000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cors());
router.init();
var port = app.get("port");
var server = app.listen(port, function () {
    return console.log("Server started on porttt " + port);
});
exports.default = server;
//# sourceMappingURL=server.js.map