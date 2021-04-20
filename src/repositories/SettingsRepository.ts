import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../models/Setting";

@EntityRepository(Setting)
class SettingRepository extends Repository<Setting> {}

export { SettingRepository };
