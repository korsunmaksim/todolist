import { Request, Response, NextFunction } from "express";
import { Model } from "mongoose";
import User from "../models/User.models";

export const isExist =
  <T>(model: Model<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    if (model.modelName === User.modelName) {
      const object = await model.findOne({ email: req.body.email });
      return object
        ? res.status(400).json({ message: "User already exists" })
        : next();
    }
    if (req.params?.id.length === 24) {
      const object = await model.findById(req.params.id);
      return !object
        ? res.status(400).json({ message: "Todo does't exist" })
        : next();
    }
    res.status(400).json({ message: "Wrong id type" });
  };
