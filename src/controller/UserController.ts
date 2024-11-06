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

  static async getUserById(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const user = await User.findOne({ where: { id: userId } });
      return res.status(200).json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Houve um erro ao buscar um usuário" });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    try {
      const [updatedRows, updatedUsers] = await User.update(
        { name, email, password },
        { where: { id: userId }, returning: true }
      );
      if (updatedRows === 0) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      return res
        .status(201)
        .json({ message: "Usuário atualizado", user: updatedUsers[0] });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Houve um erro ao editar um usuário" });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const user = await User.destroy({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      return res.status(201).json({ message: "Usuário apagado" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Houve um erro ao deletar um usuário" });
    }
  }
}
