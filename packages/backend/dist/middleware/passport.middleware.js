"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passportMiddleware = void 0;
var passport_1 = __importDefault(require("passport"));
var custom_exception_utils_1 = __importDefault(require("../utils/custom-exception.utils"));
exports.passportMiddleware = function (req, res, next) {
    passport_1.default.authenticate('jwt', { session: false }, function (err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(custom_exception_utils_1.default.Unauthorized());
        }
        req.user = user;
        next();
    })(req, res, next);
};
//# sourceMappingURL=passport.middleware.js.map