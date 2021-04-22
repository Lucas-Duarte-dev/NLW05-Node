import { getCustomRepository, Repository } from "typeorm";
import { User } from "../models/User";
import { UserRespository } from "../repositories/UserRepository";

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRespository);
  }

  async create(email: string): Promise<{ email: string }> {
    const userExist = await this.userRepository.findOne({ email });

    if (userExist) {
      return userExist;
    }

    const user = this.userRepository.create({ email });

    await this.userRepository.save(user);

    return user;
  }
}

export { UserService };
