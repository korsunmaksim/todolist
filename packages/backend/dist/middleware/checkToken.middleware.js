"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.checkToken = function (req, //Fix later
res, next) {
    var authHeader = req.headers["authorization"];
    var token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    if (token == null || undefined)
        return res.status(401).json({ message: "Unauthorized" });
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err)
            return res
                .status(403)
                .json({ message: "Verification failed", error: err.message });
        req.user = user;
        next();
    });
};
//# sourceMappingURL=checkToken.middleware.js.map