import { Router, Request, Response } from "express";
import UserController from "../controller/UserController";

const router = Router();

router.post("/create", (req: Request, res: Response) => {
  UserController.createUser(req, res);
});
router.get("/get-all", (req: Request, res: Response) => {
  UserController.getUsers(req, res);
});

export default router;
