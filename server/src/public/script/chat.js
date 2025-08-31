
const socket = io();
token = localStorage.getItem("token");

console.log("Chat mode:");
// Get URL parameters to determine chat mode
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode') || 'text';

// Update UI based on mode
document.body.className = `${mode}-chat`;
const modeIcon = mode === 'text' ? '💬' : mode === 'audio' ? '🎤' : '📹';
document.querySelector('.mode-icon').textContent = modeIcon;
document.querySelector('.mode-indicator span:last-child').textContent =
    `${mode.charAt(0).toUpperCase() + mode.slice(1)} Chat`;

// Handle sending messages
function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();

    if (message) {
        const messageContainer = document.getElementById('message-container');
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.innerHTML = `
    <div class="message-sender">You</div>
    <div class="message-text">${message}</div>
    `;

        messageContainer.appendChild(messageElement);
        input.value = '';

        // Scroll to bottom
        messageContainer.scrollTop = messageContainer.scrollHeight;

        // Simulate response after a delay
        setTimeout(() => {
            simulateResponse();
        }, 1000 + Math.random() * 2000);
    }
}

// Simulate a response from the other user
function simulateResponse() {
    const responses = [
        "That's interesting! Tell me more.",
        "I've never thought about it that way before.",
        "What do you like to do in your free time?",
        "I'm enjoying our conversation!",
        "Where are you from?",
        "What kind of music do you like?",
        "Have you read any good books lately?",
        "What's your favorite way to relax?",
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.className = 'message received';
    messageElement.innerHTML = `
    <div class="message-sender">Stranger</div>
    <div class="message-text">${randomResponse}</div>
    `;

    messageContainer.appendChild(messageElement);

    // Scroll to bottom
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Handle Enter key for sending messages
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Next chat button
function nextChat() {
    if (confirm("Are you sure you want to start a new chat with someone else?")) {
        alert("Finding a new chat partner...");
        // In a real app, this would connect to a new user
    }
}

// Report user button
function reportUser() {
    const reason = prompt("Please briefly describe the issue:");
    if (reason) {
        alert("Thank you for your report. We'll review it shortly.");
        nextChat();
    }
}

// Initialize scroll position
window.onload = function () {
    const messageContainer = document.getElementById('message-container');
    messageContainer.scrollTop = messageContainer.scrollHeight;
};

socket.on("connect", () => {
    console.log("✅ Connected to server");
    findMatch();
});



function findMatch() {
    if (!token) {
        console.error("❌ Token not found in localStorage");
        return;
    }
    socket.emit("text:find-match", { token });
    
}

function filterMatch(filters) {
    socket.emit("text:filter-match", filters);
}