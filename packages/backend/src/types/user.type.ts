export interface IUser {
  _id: string;
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IUserInfo {
  _id: string;
}

export interface IAuthUser {
  email: string;
  password: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
