# MS-Collab: Real-Time Collaborative Code Editor

A professional-grade, real-time collaborative code editor built with the same engine that powers **VS Code** and the distributed consistency logic used by **Figma**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/frontend-React-61dafb.svg)
![Node](https://img.shields.io/badge/backend-Node.js-339933.svg)
![Azure](https://img.shields.io/badge/deployment-Azure-0089d6.svg)

## 🚀 Key Features

* **Real-Time Editing:** Simultaneous code editing with zero conflict, powered by CRDTs.
* **Monaco Editor Engine:** Integrated the VS Code editing core for features like syntax highlighting and IntelliSense.
* **Presence Awareness:** Visual cursor tracking and user name tags to see who is typing where in real-time.
* **Conflict Resolution:** Implemented Conflict-free Replicated Data Types (CRDTs) to ensure eventual consistency across all clients.
* **Export Logic:** Instant local export of collaborative sessions to `.js` files.

---

## 🛠️ Tech Stack & Architecture

### Frontend
- **React.js**: Functional components with Hooks (`useRef`, `useEffect`).
- **Monaco Editor**: The industry-standard web-based code editor.
- **Yjs**: A high-performance CRDT implementation for shared state.

### Backend
- **Node.js**: WebSocket signaling server.
- **y-websocket**: Handles the synchronization protocol for Yjs documents.

### System Design Concept: CRDT vs OT
This project utilizes **CRDTs (Conflict-free Replicated Data Types)** instead of Operational Transformation (OT). 
- **Why?** CRDTs allow for decentralized, peer-to-peer style synchronization that scales horizontally much better than OT, which requires a heavy, centralized "truth" server. This ensures a low-latency experience even under high concurrency.

---

## 📂 Project Structure

```text
collab-editor/
├── client/              # React frontend & UI components
│   ├── src/
│   │   ├── Editor.js    # Core synchronization logic
│   │   └── App.js       # UI layout & Navigation
├── server/              # Node.js WebSocket server
│   ├── server.js        # Signaling & room management
│   └── utils.js         # Custom WS connection handler

---

## ⚙️ Setup & Installation

### 1. Prerequisites

* Node.js (v18 or higher)
* npm or yarn

### 2. Backend Setup

```bash
cd server
npm install
npm start

```

The server will start on `http://localhost:1234`.

### 3. Frontend Setup

```bash
cd client
npm install
npm start

```

The client will launch on `http://localhost:3000`. Open multiple tabs to test the collaboration.
