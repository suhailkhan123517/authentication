import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connect to database");
  } catch (error) {
    console.log("error connecting to mongodb");
  }
};
