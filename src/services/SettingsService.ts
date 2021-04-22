import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../models/Setting";

import { SettingRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingRepository);
  }

  async create({ chat, username }: ISettingsCreate): Promise<ISettingsCreate> {
    const userAlreadyExist = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExist) {
      throw new Error("User already exists!");
    }

    const settings = this.settingsRepository.create({ chat, username });

    await this.settingsRepository.save(settings);

    return settings;
  }

  async findByUsername(username: string) {
    const settings = this.settingsRepository.findOne({ username });

    return settings;
  }

  async update({ chat, username }: ISettingsCreate) {
    const settings = this.settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where("username = :username", { username })
      .execute();

    return settings;
  }
}

export { SettingsService };
