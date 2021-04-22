import { EntityRepository, Repository } from "typeorm";
import { Message } from "../models/Message";

@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository };
