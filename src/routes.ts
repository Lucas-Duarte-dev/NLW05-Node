import { Router } from "express";
import MessageController from "./controllers/MessageController";
import SettingController from "./controllers/SettingController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.post("/settings", SettingController.create);

routes.post("/users", UserController.create);

routes.post("/messages", MessageController.create);

export default routes;
