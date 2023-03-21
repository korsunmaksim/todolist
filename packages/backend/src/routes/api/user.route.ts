import { isExist } from "./../../middleware/isExist.middleware";
import { Router } from "express";
import {
  checkGeneric,
  authUserSchema,
  changePasswordSchema,
} from "../../middleware/generic.middleware";
import userController from "../../controllers/user.contoller";
import { checkErrors } from "../../middleware/trycatch.middleware";
import User from "../../models/User.models";
import { checkToken } from "../../middleware/checkToken.middleware";

const router: Router = Router();

router.post(
  "/register",
  checkGeneric(authUserSchema),
  isExist(User),
  checkErrors(userController.register.bind(userController))
);

router.post(
  "/login",
  checkGeneric(authUserSchema),
  checkErrors(userController.login.bind(userController))
);

router.patch(
  "/changepassword",
  checkToken,
  checkGeneric(changePasswordSchema),
  checkErrors(userController.changePassword.bind(userController))
);

router.get(
  "/",
  checkToken,
  checkErrors(userController.getUser.bind(userController))
);
export default router;
