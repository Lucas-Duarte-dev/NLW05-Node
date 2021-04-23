import { io } from "../http";
import { ConnectionService } from "../services/ConnectionService";
import { MessagesService } from "../services/MessagesService";
import { UserService } from "../services/UserService";

interface IParams {
  text: string;
  email: string;
}

io.on("connect", (socket) => {
  const connectionService = new ConnectionService();
  const userService = new UserService();
  const messagesService = new MessagesService();

  socket.on("client_firts_access", async (params) => {
    const socket_id = socket.id;
    const { text, email } = params as IParams;
    let user_id = null;
    const userExist = await userService.findByEmail(email);

    if (!userExist) {
      const user = await userService.create(email);
      await connectionService.create({
        socket_id,
        user_id: user.id,
      });

      user_id = user.id;
    } else {
      user_id = userExist.id;
      const connection = await connectionService.findByUserId(userExist.id);

      if (!connection) {
        await connectionService.create({
          socket_id,
          user_id: userExist.id,
        });
      } else {
        connection.socket_id = socket_id;
        await connectionService.create(connection);
      }
    }

    await messagesService.create({ text, user_id });

    const allMessages = await messagesService.listByUser(user_id);

    socket.emit("client_list_all_messages", allMessages);
  });
});
