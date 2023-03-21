import { IUserInfo } from "./user.type";

export class JwtPayload {
  _id: string;

  constructor(user: IUserInfo) {
    this._id = user._id;
  }

  static create(user: IUserInfo) {
    const payload = new JwtPayload(user);
    return { ...payload };
  }
}
