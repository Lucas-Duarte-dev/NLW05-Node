import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessageController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;

    const messagesService = new MessagesService();

    try {
      const message = await messagesService.create({ admin_id, text, user_id });

      return response.json(message);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default new MessageController();
