

export default function textChatHandler(socket: any, io: any) {
    console.log("🔎 Text Chat connected:", socket.id);
  socket.on("text:find-match", (data:any) => {
    console.log("🔎 Text Chat Match request:", socket.id, data);
    // match logic...
  });

  socket.on("text:filter-match", (filters:any) => {
    console.log("⚙️ Text Chat Filter:", filters);
    // filter logic...
  });
}
