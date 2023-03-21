import { FormikValues } from "formik";
import { BACKEND_KEYS } from "../common/consts/app-keys.const";
import { IUser, IChangePassword } from "../common/types/user.types";
import { APP_KEYS } from "../common/consts";
import HttpService from "./http.service";

class UserService extends HttpService {
  async getUser() {
    const res = await this.get({ url: `${BACKEND_KEYS.USER_URL}` });
    return res.data;
  }

  async login(user: IUser) {
    const res = await this.post(
      { url: APP_KEYS.BACKEND_KEYS.LOGIN, data: user },
      false
    );
    this.storeToken(res.data.token);
    return res.data;
  }

  async logout() {
    this.deleteToken();
  }

  async register(user: IUser) {
    const res = await this.post(
      { url: APP_KEYS.BACKEND_KEYS.REGISTER, data: user },
      false
    );
    this.storeToken(res.data.token);
    return res.data;
  }

  async changePassword(newData: IChangePassword | FormikValues) {
    const res = await this.patch({
      url: APP_KEYS.BACKEND_KEYS.CHANGE_PASSWORD,
      data: newData,
    });
    return res.data;
  }
}

const userService = new UserService();

export default userService;
