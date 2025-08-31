document.querySelectorAll(".mode-card").forEach((card) => {
    card.addEventListener("click", (event) => {
        console.log("Clicked mode:", event.currentTarget.id);
        selectMode(event.currentTarget.id);
    });
})
    let selectedMode = null;

    function selectMode(mode) {
        selectedMode = mode;

        // Update UI to show selected mode
        document.querySelectorAll(".mode-card").forEach((card) => {
        card.classList.remove("selected");
        });

    event.currentTarget.classList.add("selected");

    // Enable the start button
    const startBtn = document.getElementById("start-chat-btn");
    startBtn.classList.remove("btn-disabled");
    startBtn.classList.add("btn-primary");
    startBtn.textContent = `Start ${
        mode.charAt(0).toUpperCase() + mode.slice(1)
    } Chat`;
        // startBtn.href = `chat.html?mode=${mode}`;

    if (mode === "text") {
        startBtn.href = "chat.html";
        } else if (mode === "audio") {
        startBtn.href = "audio-chat.html";
        } else if (mode === "video") {
        startBtn.href = "video-chat.html";
        }
      }
