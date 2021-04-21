import { Router } from "express";
import SettingController from "./controllers/SettingController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.post("/settings", SettingController.create);

routes.post("/users", UserController.create);

export default routes;
