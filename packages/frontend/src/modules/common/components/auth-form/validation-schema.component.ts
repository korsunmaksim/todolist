import * as yup from "yup";
import { EFormType } from "../../types/user.types";

const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;

const emailErrorMessage = "Incorrect type of email";
const passwordErrorMessage =
  "Password must contain at least 6 characters,which includes at least one uppercase letter,lowercase letter and one digit ";

const loginValidationSchema = yup.object({
  email: yup.string().matches(emailRegex, emailErrorMessage).required(),
});

const registerValidationSchema = yup.object({
  email: yup.string().matches(emailRegex, emailErrorMessage).required(),
  password: yup
    .string()
    .matches(passwordRegex, passwordErrorMessage)
    .required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don`t match")
    .required("Confirm your password"),
});

export const validation = {
  [EFormType.LOGIN]: loginValidationSchema,
  [EFormType.REGISTER]: registerValidationSchema,
};
