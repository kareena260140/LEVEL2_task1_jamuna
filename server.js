import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import resourceRoutes from "./routes/resources.js";
import applicationRoutes from "./routes/applications.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/applications", applicationRoutes);

const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
