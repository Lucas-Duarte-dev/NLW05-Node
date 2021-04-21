import { Request, Response } from "express";

import { SettingsService } from "../services/SettingsService";

class SettingController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (error) {
      return response.status(400).json({ err: error.message });
    }
  }
}

export default new SettingController();
