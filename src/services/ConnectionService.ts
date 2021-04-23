import { getCustomRepository, Repository } from "typeorm";
import { ConnectionRepository } from "../repositories/ConnectionRepository";
import { Connection } from "../models/Connection";

interface IConnectionCreate {
  admin_id?: string;
  user_id: string;
  socket_id: string;
  id?: string;
}

class ConnectionService {
  private connectionRepository: Repository<Connection>;

  constructor() {
    this.connectionRepository = getCustomRepository(ConnectionRepository);
  }

  async create({
    admin_id,
    user_id,
    socket_id,
    id,
  }: IConnectionCreate): Promise<IConnectionCreate> {
    const connection = this.connectionRepository.create({
      admin_id,
      user_id,
      socket_id,
      id,
    });

    await this.connectionRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string): Promise<IConnectionCreate> {
    const connection = this.connectionRepository.findOne({ user_id });
    return connection;
  }

  async findAllWithoutAdmin() {
    const connection = await this.connectionRepository.find({
      where: { admin_id: null },
      relations: ["user"],
    });

    return connection;
  }

  async findBySocketId(socket_id: string): Promise<IConnectionCreate> {
    const connection = this.connectionRepository.findOne({ socket_id });

    return connection;
  }

  async updateAdminId(user_id: string, admin_id: string) {
    await this.connectionRepository
      .createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where("user_id = :user_id", { user_id })
      .execute();
  }
}

export { ConnectionService };
