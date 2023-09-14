import { Router } from "express";
import { userController } from "../controllers/user.controller";

const routes = Router();

routes.get("/", userController.getAllUsers);
routes.get("/:id", userController.getUserById);
routes.post("/", userController.createUser);
routes.put("/:id", userController.updateUser);
routes.delete("/:id", userController.deleteUser);


export default routes;