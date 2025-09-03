"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = audioChatHandler;
function audioChatHandler(socket, io) {
    socket.on("audio:find-match", () => {
        console.log("🎧 Audio Chat Match request:", socket.id);
    });
    socket.on("audio:filter-match", (filters) => {
        console.log("🎧 Audio Chat Filter:", filters);
    });
}
//# sourceMappingURL=audio.socket.js.map