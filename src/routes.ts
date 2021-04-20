import { Router } from "express";
import SettingController from "./controllers/SettingController";

const routes = Router();

routes.post("/settings", SettingController.create);

export default routes;
