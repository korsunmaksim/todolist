"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isExist_middleware_1 = require("./../../middleware/isExist.middleware");
var express_1 = require("express");
var generic_middleware_1 = require("../../middleware/generic.middleware");
var user_contoller_1 = __importDefault(require("../../controllers/user.contoller"));
var trycatch_middleware_1 = require("../../middleware/trycatch.middleware");
var User_models_1 = __importDefault(require("../../models/User.models"));
var checkToken_middleware_1 = require("../../middleware/checkToken.middleware");
var router = express_1.Router();
router.post("/register", generic_middleware_1.checkGeneric(generic_middleware_1.authUserSchema), isExist_middleware_1.isExist(User_models_1.default), trycatch_middleware_1.checkErrors(user_contoller_1.default.register.bind(user_contoller_1.default)));
router.post("/login", generic_middleware_1.checkGeneric(generic_middleware_1.authUserSchema), trycatch_middleware_1.checkErrors(user_contoller_1.default.login.bind(user_contoller_1.default)));
router.patch("/changepassword", checkToken_middleware_1.checkToken, generic_middleware_1.checkGeneric(generic_middleware_1.changePasswordSchema), trycatch_middleware_1.checkErrors(user_contoller_1.default.changePassword.bind(user_contoller_1.default)));
router.get("/", checkToken_middleware_1.checkToken, trycatch_middleware_1.checkErrors(user_contoller_1.default.getUser.bind(user_contoller_1.default)));
exports.default = router;
//# sourceMappingURL=user.route.js.map