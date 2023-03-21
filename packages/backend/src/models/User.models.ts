import { Model, model, Schema } from "mongoose";
import { IUser } from "../types/user.type";

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: Model<IUser> = model<IUser>("User", userSchema);

export default User;
