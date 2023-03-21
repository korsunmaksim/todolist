import bodyParser from "body-parser";
import express from "express";
import "dotenv/config";
import AppRouter from "./routes";
import connectDB from "./config/database";

const cors = require("cors");

const app = express();
const router = new AppRouter(app);

connectDB();

app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router.init();

const port = app.get("port");

const server = app.listen(port, () =>
  console.log(`Server started on porttt ${port}`)
);

export default server;
