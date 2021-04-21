import { getCustomRepository } from "typeorm";

import { SettingRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingRepository);

    const userAlreadyExist = await settingsRepository.findOne({ username });

    if (userAlreadyExist) {
      throw new Error("User already exists!");
    }

    const settings = settingsRepository.create({ chat, username });

    await settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };
