import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingRepository } from "../repositories/SettingsRepository";

class SettingController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingRepository);

    const settings = settingsRepository.create({ chat, username });

    await settingsRepository.save(settings);

    return response.json(settings);
  }
}

export default new SettingController();
