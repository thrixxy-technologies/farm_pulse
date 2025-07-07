require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { setupWebSocket } = require("./websocket/socketServer");
const apiRoutes = require("./routes/api");

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

// WebSocket setup
setupWebSocket(server);

// Start server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
