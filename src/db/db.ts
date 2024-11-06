import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_USER || !process.env.DATABASE_PASSWORD) {
  throw new Error(
    "As variáveis de ambiente DATABASE_USER e DATABASE_PASSWORD devem estar definidas."
  );
}

const sequelize = new Sequelize(
  "test",
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
  }
);

export default sequelize;
