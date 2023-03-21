import * as yup from "yup";
import { OptionalObjectSchema } from "yup/lib/object";
import { Request, Response, NextFunction } from "express";

export const newTodoSchema = yup.object({
  title: yup.string(),
  task: yup.string(),
});

export const updatedTodoSchema = yup.object({
  title: yup.string(),
  task: yup.string(),
  completed: yup.boolean(),
});

export const authUserSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const changePasswordSchema = yup.object({
  oldPassword: yup.string(),
  newPassword: yup.string(),
});

export function checkGeneric(schema: OptionalObjectSchema<{}>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (e) {
      res.status(400).json({ message: "Wrong object type" });
    }
  };
}
