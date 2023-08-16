import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("DB connected...");
  } catch (err) {
    console.log("Failed to load error");
    console.log(err);
  }
};
