import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
class UserRespository extends Repository<User> {}

export { UserRespository };
