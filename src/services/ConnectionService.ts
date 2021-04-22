import { getCustomRepository } from "typeorm";
import { ConnectionRepository } from "../repositories/ConnectionRepository";

interface IConnectionCreate {
  admin_id?: string;
  user_id: string;
  socket_id: string;
}

class ConnectionService {
  private connectionRepository: ConnectionRepository;

  constructor() {
    this.connectionRepository = getCustomRepository(ConnectionRepository);
  }

  async create({
    admin_id,
    user_id,
    socket_id,
  }: IConnectionCreate): Promise<IConnectionCreate> {
    const connection = this.connectionRepository.create({
      admin_id,
      user_id,
      socket_id,
    });

    await this.connectionRepository.save(connection);

    return connection;
  }
}
