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
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var User_models_1 = __importDefault(require("../models/User.models"));
var jwt_type_1 = require("../types/jwt.type");
var custom_exception_utils_1 = __importDefault(require("../utils/custom-exception.utils"));
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.generateToken = function (user) {
        return {
            token: jsonwebtoken_1.default.sign(jwt_type_1.JwtPayload.create(user), process.env.JWT_SECRET, {
                expiresIn: "2h",
            }),
        };
    };
    UserService.prototype.hashPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var salt, hashedPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcryptjs_1.default.genSalt(12)];
                    case 1:
                        salt = _a.sent();
                        return [4 /*yield*/, bcryptjs_1.default.hash(password, salt)];
                    case 2:
                        hashedPassword = _a.sent();
                        return [2 /*return*/, hashedPassword];
                }
            });
        });
    };
    UserService.prototype.comparePassword = function (password, hashedPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcryptjs_1.default.compare(password, hashedPassword)];
                    case 1:
                        isValid = _a.sent();
                        return [2 /*return*/, isValid];
                }
            });
        });
    };
    UserService.prototype.getUser = function (userInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_models_1.default.findById(userInfo._id)];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw custom_exception_utils_1.default.BadRequest("Cannot get user info");
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.create = function (payloadUser) {
        return __awaiter(this, void 0, void 0, function () {
            var hashedPassword, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hashPassword(payloadUser.password)];
                    case 1:
                        hashedPassword = _a.sent();
                        return [4 /*yield*/, User_models_1.default.create(__assign(__assign({}, payloadUser), { password: hashedPassword }))];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, this.generateToken(user)];
                }
            });
        });
    };
    UserService.prototype.login = function (payloadUser) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_models_1.default.findOne({ email: payloadUser.email })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            throw custom_exception_utils_1.default.NotFound("User wasn't found");
                        return [4 /*yield*/, this.comparePassword(payloadUser.password, user.password)];
                    case 2:
                        isValid = _a.sent();
                        if (!isValid)
                            throw custom_exception_utils_1.default.BadRequest("Wrong login data");
                        return [2 /*return*/, this.generateToken(user)];
                }
            });
        });
    };
    UserService.prototype.changePassword = function (payload, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, user, isValid, newPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = userId._id;
                        return [4 /*yield*/, User_models_1.default.findById(_id)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.comparePassword(payload.oldPassword, user.password)];
                    case 2:
                        isValid = _a.sent();
                        if (!isValid)
                            throw custom_exception_utils_1.default.BadRequest("Wrong current password");
                        return [4 /*yield*/, this.hashPassword(payload.newPassword)];
                    case 3:
                        newPassword = _a.sent();
                        return [4 /*yield*/, User_models_1.default.findOneAndUpdate({ _id: _id }, {
                                password: newPassword,
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, "Password was successfully changed"];
                }
            });
        });
    };
    return UserService;
}());
exports.default = UserService;
//# sourceMappingURL=user.service.js.map