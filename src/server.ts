import "reflect-metadata";
import express from "express";
import "./database";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ hello: "world" });
});

app.post("/users", (request, response) => {
  return response.status(200).json({ message: "Usuário criado com sucesso" });
});

app.listen(3333, () => {
  console.log("Server is running! 😎");
});
