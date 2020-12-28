import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router({ prefix: "/api/auth" });

export default router
  .post("/sign-up", () => console.log("Sign-Up User"))
  .post("/login", () => console.log("Login User"));
