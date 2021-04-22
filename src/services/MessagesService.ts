import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../models/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesService {
  private messageRepository: Repository<Message>;

  constructor() {
    this.messageRepository = getCustomRepository(MessagesRepository);
  }

  async create({
    text,
    user_id,
    admin_id,
  }: IMessageCreate): Promise<IMessageCreate> {
    const message = this.messageRepository.create({ text, user_id, admin_id });

    await this.messageRepository.save(message);

    return message;
  }

  async listByUser(user_id: string): Promise<IMessageCreate[]> {
    const list = await this.messageRepository.find({
      where: { user_id },
      relations: ["user"],
    });

    return list;
  }
}

export { MessagesService };
