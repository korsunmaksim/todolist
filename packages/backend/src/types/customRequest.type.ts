import jwt from "jsonwebtoken";
import { Request } from "express";
import { ITodo } from "./todos.type";
import { IUser, IUserInfo } from "./user.type";

export interface IAppRequest<T> extends Request {
  body: T;
  todo: ITodo;
  user?: IUserInfo;
}

export interface ITokenRequest extends Request {
  user: string;
}

export interface IAuthWithoutBodyRequest extends Request {
  todo?: ITodo;
  user: IUserInfo;
}

export interface IAuthAppRequest<T> extends IAppRequest<T> {
  user: IUser;
}
