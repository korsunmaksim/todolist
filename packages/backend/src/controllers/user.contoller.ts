import {
  IAuthUser,
  IChangePassword,
  IToken,
  IUser,
  IUserInfo,
} from "../types/user.type";
import { IAuthAppRequest, IAppRequest } from "../types/customRequest.type";
import UserService from "../services/user.service";

export class UserController {
  constructor(private userService: UserService) {}

  async getUser(req: IAppRequest<IUserInfo>): Promise<IUser> {
    const user = await this.userService.getUser(req.user!);
    return user;
  }

  async register(req: IAppRequest<IAuthUser>): Promise<IToken> {
    return this.userService.create(req.body);
  }

  async login(req: IAppRequest<IAuthUser>): Promise<IToken> {
    return this.userService.login(req.body);
  }

  async changePassword(req: IAuthAppRequest<IChangePassword>): Promise<string> {
    return this.userService.changePassword(req.body, req.user);
  }
}

const userController = new UserController(new UserService());

export default userController;
