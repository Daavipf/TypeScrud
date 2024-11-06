import { Router, Request, Response } from "express";
import UserController from "../controller/UserController";

const router = Router();

router.post("/create", (req: Request, res: Response) => {
  UserController.createUser(req, res);
});
router.get("/get-all", (req: Request, res: Response) => {
  UserController.getUsers(req, res);
});
router.get("/get/:userId", (req: Request, res: Response) => {
  UserController.getUserById(req, res);
});
router.put("/update/:userId", (req: Request, res: Response) => {
  UserController.updateUser(req, res);
});
router.delete("/delete/:userId", (req: Request, res: Response) => {
  UserController.deleteUser(req, res);
});

export default router;
