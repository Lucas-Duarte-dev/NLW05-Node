import { getCustomRepository } from "typeorm";
import { UserRespository } from "../repositories/UserRepository";

interface IUserCreate {
  email: string;
}

class UserService {
  async create({ email }: IUserCreate) {
    const userRepository = getCustomRepository(UserRespository);

    const userAlreadyExist = userRepository.findOne({ email });

    if (userAlreadyExist) {
      throw new Error("User already exists");
    }

    const user = userRepository.create({ email });

    await userRepository.save(user);

    return user;
  }
}

export { UserService };
