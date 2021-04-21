import { getCustomRepository } from "typeorm";
import { UserRespository } from "../repositories/UserRepository";

class UserService {
  async create(email: string): Promise<{ email: string }> {
    const userRepository = getCustomRepository(UserRespository);

    const userExist = await userRepository.findOne({ email });

    if (userExist) {
      return userExist;
    }

    const user = userRepository.create({ email });

    await userRepository.save(user);

    return user;
  }
}

export { UserService };
