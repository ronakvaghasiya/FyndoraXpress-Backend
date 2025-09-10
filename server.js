// server.js
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/config/db");
require("dotenv").config();

// Load environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";

// Connect to MongoDB
connectDB(MONGO_URI);

// Create server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
