export default function videoChatHandler(socket, io) {
  socket.on("video:find-match", () => {
    console.log("🎥 Video Chat Match request:", socket.id);
  });

  socket.on("video:filter-match", (filters) => {
    console.log("🎥 Video Chat Filter:", filters);
  });
}
