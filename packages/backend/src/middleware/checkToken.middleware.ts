import { IUserInfo } from "./../types/user.type";
import { IAuthWithoutBodyRequest } from "./../types/customRequest.type";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const checkToken = (
  req: any, //Fix later
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (token == null || undefined)
    return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
    if (err)
      return res
        .status(403)
        .json({ message: "Verification failed", error: err.message });
    req.user = user;
    next();
  });
};
