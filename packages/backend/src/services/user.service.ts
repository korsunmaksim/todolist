import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.models";
import { JwtPayload } from "../types/jwt.type";
import {
  IChangePassword,
  IAuthUser,
  IToken,
  IUserInfo,
  IUser,
} from "../types/user.type";
import CustomException from "../utils/custom-exception.utils";

export default class UserService {
  private generateToken(user: IUserInfo): IToken {
    return {
      token: jwt.sign(JwtPayload.create(user), process.env.JWT_SECRET, {
        expiresIn: "2h",
      }),
    };
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  private async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const isValid = await bcrypt.compare(password, hashedPassword);
    return isValid;
  }

  async getUser(userInfo: IUserInfo): Promise<IUser> {
    const user = await User.findById(userInfo._id);
    if (!user) throw CustomException.BadRequest("Cannot get user info");
    return user;
  }

  async create(payloadUser: IAuthUser): Promise<IToken> {
    const hashedPassword = await this.hashPassword(payloadUser.password);
    const user = await User.create({
      ...payloadUser,
      password: hashedPassword,
    });
    return this.generateToken(user);
  }

  async login(payloadUser: IAuthUser): Promise<IToken> {
    const user = await User.findOne({ email: payloadUser.email });

    if (!user) throw CustomException.NotFound("User wasn't found");
    const isValid = await this.comparePassword(
      payloadUser.password,
      user.password
    );
    if (!isValid) throw CustomException.BadRequest("Wrong login data");
    return this.generateToken(user);
  }

  async changePassword(
    payload: IChangePassword,
    userId: IUserInfo
  ): Promise<string> {
    const _id = userId._id;
    const user = await User.findById(_id);
    const isValid = await this.comparePassword(
      payload.oldPassword,
      user!.password
    );
    if (!isValid) throw CustomException.BadRequest("Wrong current password");
    const newPassword = await this.hashPassword(payload.newPassword);
    await User.findOneAndUpdate(
      { _id },
      {
        password: newPassword,
      }
    );
    return "Password was successfully changed";
  }
}
