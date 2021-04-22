import { Router } from "express";
import MessageController from "./controllers/MessageController";
import SettingController from "./controllers/SettingController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.post("/settings", SettingController.create);
routes.get("/settings/:username", SettingController.findByUsername);
routes.put("/settings/:username", SettingController.update);

routes.post("/users", UserController.create);

routes.post("/messages", MessageController.create);
routes.get("/messages/:id", MessageController.showByUser);

export default routes;
