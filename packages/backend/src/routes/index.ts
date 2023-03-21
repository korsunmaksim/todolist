import { Application } from "express";
import todosRouter from "./api/todos.route";
import userRouter from "./api/user.route";

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get("/", (_req, res) => {
      res.send("API Runningggg");
    });
    this.app.use("/api/user", userRouter);
    this.app.use("/api/todos", todosRouter);
  }
}

export default AppRouter;
