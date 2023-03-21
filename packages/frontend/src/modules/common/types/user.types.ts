import { FormikValues } from "formik";

export interface IUser {
  email: string;
  password: string;
}

export interface IGetUser {
  _id: string;
  email: string;
}

export interface IToken {
  token: string;
}

export interface IChangePassword extends FormikValues {
  oldPassword: string;
  newPassword: string;
}

export enum EAuthFormValues {
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirm_password",
}

export enum EChangePasswordFormValues {
  OLD_PASSWORD = "oldPassword",
  NEW_PASSWORD = "newPassword",
}

export enum EFormType {
  LOGIN = "login",
  REGISTER = "register",
}

export interface IAuthFormProps {
  formType: EFormType;
  onSubmit: (values: UserAuth) => void;
}

export class UserAuth {
  email: string;

  password: string;

  confirmPassword?: string;

  constructor() {
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }
}
