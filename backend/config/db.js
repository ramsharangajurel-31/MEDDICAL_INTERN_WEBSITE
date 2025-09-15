import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 
const mongoURI = process.env.MONGO_URL;

if (!mongoURI) {
  throw new Error("❌ MONGO_URL is not defined in your .env file!");
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Connection error:", err.message));
