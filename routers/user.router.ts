import { Router } from "https://deno.land/x/oak/mod.ts";
import UserController from "../controllers/user.controller.ts";

const router = new Router({ prefix: "/api/users" });

export default router
  .get("/", UserController.getUsers)
  .get("/:userId", UserController.getUser)
  // .patch('/:userId', () => console.log("Update User"));
  .put("/", UserController.addUser);
