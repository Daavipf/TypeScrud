import { Request, Response } from "express";
import User from "../models/User";

export default class UserController {
  static async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      const newUser = await User.create({ name, email, password });
      return res.status(201).json({ message: "Usuário criado" });
    } catch (error) {
      return res.status(500).json({ message: "Houve um erro ao cadastrar" });
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Houve um erro ao buscar todos os usuários" });
    }
  }
}
