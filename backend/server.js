// 1️⃣ Load environment variables first
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// 2️⃣ Import routes AFTER dotenv
import appointmentRoutes from "./routes/appointmentRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

// 3️⃣ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 4️⃣ Initialize Express
const app = express();

// 5️⃣ Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// 6️⃣ Dummy blog data
const blogs = [
  {
    id: 1,
    title: "A passion for putting patients first",
    author: "Admin",
    date: "Monday 05, September 2021",
    views: 68,
    likes: 86,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    image: `/blogs1.jpg`,
  },
  {
    id: 2,
    title: "Healthcare innovations shaping the future",
    author: "Author 2",
    date: "Tuesday 06, September 2021",
    views: 34,
    likes: 20,
    description: "Quisque placerat scelerisque tortor ornare ornare.",
    image: `/blogs2.jpg`,
  },
  {
    id: 3,
    title: "Doctors dedicated to excellence",
    author: "Author 3",
    date: "Wednesday 07, September 2021",
    views: 50,
    likes: 44,
    description: "Convallis felis vitae tortor augue.",
    image: `/blogs3.jpg`,
  },
  {
    id: 4,
    title: "Patient-centered medical practices",
    author: "Author 4",
    date: "Thursday 08, September 2021",
    views: 22,
    likes: 15,
    description: "Velit nascetur proin massa in.",
    image: `/blogs1.jpg`,
  },
  {
    id: 5,
    title: "Commitment to care and quality",
    author: "Author 5",
    date: "Friday 09, September 2021",
    views: 40,
    likes: 30,
    description: "Consequat faucibus porttitor enim.",
    image: `/blogs2.jpg`,
  },
];

// 7️⃣ Routes
app.use("/api/appointments", appointmentRoutes);
app.use("/api/contact", contactRoutes);

// GET blogs with search + pagination
app.get("/api/blogs", (req, res) => {
  const { search, page = 1, limit = 5 } = req.query;
  let results = blogs;

  // 🔍 Search filter
  if (search) {
    results = blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 📑 Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedResults = results.slice(startIndex, endIndex);

  res.json({
    total: results.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginatedResults,
  });
});

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// 8️⃣ Start server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
