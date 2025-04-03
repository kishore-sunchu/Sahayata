/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

interface MongooseCache {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

const globalCache: { mongoose?: MongooseCache } = global as any;
const cached: MongooseCache = globalCache.mongoose || { conn: null, promise: null };

globalCache.mongoose = cached;

export async function connectToDatabase(): Promise<Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI as string, {
        dbName: "sahayata",
      })
      .then((mongooseInstance) => mongooseInstance.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
