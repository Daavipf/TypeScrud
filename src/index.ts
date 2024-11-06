import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user";
import sequelize from "./db/db";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/user", userRouter);

sequelize
  .sync()
  .then(() => {
    console.log("[servidor]: Conectado ao banco de dados");
    app.listen(PORT, () => {
      console.log(`[servidor]: App rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("[servidor]: Erro ao conectar com o banco ", error);
  });
