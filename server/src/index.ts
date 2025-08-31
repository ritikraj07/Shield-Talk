// index.ts
// 📌 Entry point of the application – starts the server and listens on a port

import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app";
import dotenv from "dotenv";
import { connectDatabase } from "./db";
import config from "./config";
import textChatHandler from "./sockets/chat.socket";
import videoChatHandler from "./sockets/video.socket";
import audioChatHandler from "./sockets/audio.socket";


dotenv.config();

const PORT = config.PORT;
const version = config.VERSION;
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("🔥 User connected:", socket.id);
  
  // load feature-specific handlers
  textChatHandler(socket, io);
  audioChatHandler(socket, io);
  videoChatHandler(socket, io);

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});


connectDatabase().then(() => {
  console.log("✅ MongoDB connected successfully.");
  // ✅ Start server
  server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/${version}`);
  });
});
