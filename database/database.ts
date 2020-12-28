import { MongoClient } from "https://deno.land/x/mongo@v0.20.1/mod.ts";

const client = new MongoClient();
await client.connect("mongodb://127.0.0.1:27017");

const db = client.database("app");

export default db;
