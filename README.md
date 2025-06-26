#  FarmPulse – Decentralized Smart Farming with Web3

**FarmPulse** is a smart farming system that automates irrigation, manure application, and pump control using IoT sensors, a Web3 backend, and decentralized smart contracts written in Cairo for **StarkNet**.  solves the key challenges of traditional farming by automating irrigation, manure application, and pump control. It eliminates inconsistent watering, labor-intensive fertilizing, and inefficient manual pump operations. By integrating these systems, FarmPulse ensures precise, timely delivery of water and nutrients based on crop needs. This reduces waste, improves yields, and saves time and labor. The system also enables real-time monitoring and alerts, helping farmers respond quickly to issues like dry soil or system failures. FarmPulse brings smart, efficient, and sustainable farming to life, making modern agriculture more productive and less dependent on manual intervention.
FarmPulse stands out by offering a fully integrated, smart farming solution that automates irrigation, manure application, and pump control—all in one system. Unlike traditional systems that manage each function separately, FarmPulse synchronizes them using real-time data and sensors for precise water and nutrient delivery. Its user-friendly interface and remote monitoring capabilities allow farmers to control and optimize operations from anywhere. FarmPulse reduces manual labor, conserves resources, and maximizes crop yield with minimal effort. Its modular design makes it adaptable for small to large farms, and its data-driven approach ensures consistent, sustainable farming with smarter decision-making.

---

## Features

-  Real-time irrigation and manure distribution using ESP8266 sensors.
-  Secure authentication using Web3Auth and wallet mapping.
-  Smart contract automation with Cairo on StarkNet.
-  Real-time data handling via WebSockets.
-  Middleware backend (Node.js/Express) as a bridge between devices and blockchain.
-  Transparent and verifiable records on-chain.
-  Modular and scalable system architecture for any farm size.

---

## Tech Stack

| Layer         | Technology                      |
|---------------|----------------------------------|
| Blockchain    | Cairo Smart Contracts (StarkNet) |
| Web3 Tools    | StarkNet.js, Web3Auth            |
| Frontend      | React.js                         |
| IoT           | ESP8266 (Wi-Fi-based)            |
| Backend       | Node.js + Express.js + WebSockets|
| Authentication| Web3Auth                         |
| Storage       | Optional: MongoDB / IPFS         |

---

## Local Development Setup

### Prerequisites

- Node.js (v16+)
- Git
- MetaMask (for Web3Auth onboarding)
- StarkNet wallet (e.g., Argent X, Braavos)
- Yarn or npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/farmpulse.git
cd farmpulse

cd backend
npm install

cd ../frontend
npm install

cd contracts
scarb build

Configure Environment Variables
Create a .env file in both /backend and /frontend:

Backend (.env):
PRIVATE_KEY=your_starknet_private_key
STARKNET_RPC=https://rpc.starknet-testnet.example
PORT=4000

Frontend (.env):
VITE_CONTRACT_ADDRESS=0xYourStarkNetContractAddress
VITE_BACKEND_WS_URL=ws://localhost:4000

Start Backend (WebSocket + REST API):
cd backend
node index.js

Start Frontend (React):
cd ../frontend
npm start

## Real time data flow
ESP8266 -> Wi-Fi -> Express Backend (Node.js) -> WebSocket -> React Frontend
                                  |
                              StarkNet.js
                                  |
                          StarkNet Smart Contracts

## Contribution Guide
We welcome all contributions!
1.Fork the repo

2.Create a new branch
git checkout -b feature/your-feature-name

3.Make your changes

4.Commit with clear messages
git commit -m "Add: New sensor relay handler"

Push and open a Pull Request

### structure

farmpulse/
├── backend/          # Express server + WebSocket + StarkNet.js
│   ├── routes/
│   ├── websocket.js
│   ├── starknet/     # Contract interaction logic
│   └── index.js
├── frontend/         # React frontend (Web3Auth + StarkNet.js)
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
├── contracts/        # Cairo contracts using Scarb
│   ├── src/
│   └── Scarb.toml
├── iot/              # ESP8266 firmware code
│   └── main.ino
└── README.md
