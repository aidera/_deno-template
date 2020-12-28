import { Application } from "https://deno.land/x/oak/mod.ts";

import UserRouter from "./routers/user.router.ts";

/* Setting ENV variables */
const env = Deno.env.toObject();
const PORT = env.PORT || 5000;
const HOST = env.HOST || "localhost";

/* Initiate */
const app = new Application();

/* Connect routes */
app.use(UserRouter.routes());
app.use(UserRouter.allowedMethods());

/* Starting our server */
console.log(`App is listening to ${PORT} PORT`);
app.listen(`${HOST}:${PORT}`);
