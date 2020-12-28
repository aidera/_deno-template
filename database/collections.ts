import db from "./database.ts";

import IUser from "../models/User.ts";

export const User = db.collection<IUser>("users");
