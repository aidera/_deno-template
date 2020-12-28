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
  addUser: async (ctx: any) => {
    try {
      // const users = await User.all();
      // const user = new User();
      // user.name = 'Polly';
      // user.email = '1@r.t';
      // user.password = '1@r.t';
      // await user.save();
      // console.log(user);
      ctx.response.body = 1;
      ctx.response.status = 200;
    } catch (err) {
      ctx.response.body = { error: true };
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
