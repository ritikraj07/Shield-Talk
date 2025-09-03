"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = textChatHandler;
function textChatHandler(socket, io) {
    console.log("🔎 Text Chat connected:", socket.id);
    socket.on("text:find-match", (data) => {
        console.log("🔎 Text Chat Match request:", socket.id, data);
        // match logic...
    });
    socket.on("text:filter-match", (filters) => {
        console.log("⚙️ Text Chat Filter:", filters);
        // filter logic...
    });
}
//# sourceMappingURL=chat.socket.js.map