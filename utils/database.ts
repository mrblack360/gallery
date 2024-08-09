import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Database already connected");
    return;
  } else {
    try {
      await mongoose.connect(
        process.env.MONGO_DB_URI ? process.env.MONGO_DB_URI : "",
        { dbName: "gallery" }
      );
      isConnected = true;
      console.log("Database connected");
    } catch (error) {
      console.log("Failed to connect to database");
      console.log(error);
    }
  }
};
