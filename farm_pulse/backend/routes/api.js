const express = require("express");
const { broadcast } = require("../websocket/socketServer");
const router = express.Router();

// Test endpoint (used by ESP8266 or Postman)
router.post("/sensor", (req, res) => {
    const { deviceId, moisture, pumpStatus } = req.body;

    console.log("📥 Sensor data received:", req.body);

    // Broadcast to WebSocket clients
    broadcast({
        deviceId,
        moisture,
        pumpStatus,
        timestamp: new Date().toISOString(),
    });

    res.status(200).json({ success: true, message: "Data broadcasted" });
});

module.exports = router;
