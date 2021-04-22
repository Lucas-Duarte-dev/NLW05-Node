import { io } from "../http";

io.on("connect", (socket) => {
  socket.on("client_firts_access", (params) => {
    console.log(params);
  });
});
