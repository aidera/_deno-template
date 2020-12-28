import { Bson } from "https://deno.land/x/mongo@v0.20.1/mod.ts";

import { User } from "../database/collections.ts";

const UserController = {
  getUsers: async (ctx: any) => {
    try {
      const users = await User.find().toArray();
      ctx.response.body = { users: users };
      ctx.response.status = 200;
    } catch (err) {
      ctx.response.body = { users: null };
      ctx.response.status = 500;
    }
  },

  getUser: async (ctx: any) => {
    const userId = ctx.params.userId;
    console.log(userId);
    try {
      const user = await User.findOne({ _id: new Bson.ObjectId(userId) });
      ctx.response.body = { user: user };
      ctx.response.status = 200;
    } catch (err) {
      ctx.response.body = { user: null };
      ctx.response.status = 500;
    }
  },
};

export default UserController;
