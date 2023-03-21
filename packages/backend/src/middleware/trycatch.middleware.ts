import { Request, Response } from "express";
import CustomException from "../utils/custom-exception.utils";

export function checkErrors(callbackFunc: Function) {
  return async function resFunc(req: Request, res: Response) {
    try {
      const response = await callbackFunc(req);
      res.status(200).json(response);
    } catch (err) {
      if (err instanceof CustomException) {
        return res.status(err.status).json({ errorMessage: err.message });
      }
      res.status(400).json({ message: "Something went wrong" });
    }
  };
}
