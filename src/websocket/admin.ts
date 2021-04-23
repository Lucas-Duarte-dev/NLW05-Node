import { io } from "../http";
import { ConnectionService } from "../services/ConnectionService";

io.on("connect", async (socket) => {
  const connectionsService = new ConnectionService();

  const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();

  io.emit("admin_list_all_users", allConnectionsWithoutAdmin);
});
