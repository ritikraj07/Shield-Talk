"use strict";
// index.ts
// 📌 Entry point of the application – starts the server and listens on a port
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const config_1 = __importDefault(require("./config"));
const chat_socket_1 = __importDefault(require("./sockets/chat.socket"));
const video_socket_1 = __importDefault(require("./sockets/video.socket"));
const audio_socket_1 = __importDefault(require("./sockets/audio.socket"));
dotenv_1.default.config();
const PORT = config_1.default.PORT;
const version = config_1.default.VERSION;
const server = (0, http_1.createServer)(app_1.default);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
io.on("connection", (socket) => {
    console.log("🔥 User connected:", socket.id);
    // load feature-specific handlers
    (0, chat_socket_1.default)(socket, io);
    (0, audio_socket_1.default)(socket, io);
    (0, video_socket_1.default)(socket, io);
    socket.on("disconnect", () => {
        console.log("❌ User disconnected:", socket.id);
    });
});
(0, db_1.connectDatabase)().then(() => {
    console.log("✅ MongoDB connected successfully.");
    // ✅ Start server
    server.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}/${version}`);
    });
});
//# sourceMappingURL=index.js.map