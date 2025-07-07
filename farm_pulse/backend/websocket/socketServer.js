const WebSocket = require("ws");

let wss;

function setupWebSocket(server) {
    wss = new WebSocket.Server({ server });

    wss.on("connection", (ws) => {
        console.log("🔌 WebSocket client connected");

        ws.on("message", (message) => {
            console.log("💬 Received from frontend:", message.toString());
        });

        ws.send(JSON.stringify({ message: "📡 Connected to FarmPulse WebSocket" }));
    });
}

function broadcast(data) {
    if (!wss) return;

    const msg = JSON.stringify(data);
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(msg);
        }
    });
}

module.exports = { setupWebSocket, broadcast };
