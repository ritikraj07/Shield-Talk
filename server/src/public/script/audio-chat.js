// Audio Chat JavaScript

// Global state
let isMuted = false;
let isDeafened = false;
let currentRoom = "English Practice Room";
let users = [];
let rooms = [];

// DOM Elements
const participantsGrid = document.getElementById('participants-grid');
const userList = document.getElementById('user-list');
const roomList = document.getElementById('room-list');
const roomsContainer = document.getElementById('rooms-container');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const muteBtn = document.getElementById('mute-btn');
const deafenBtn = document.getElementById('deafen-btn');
const leaveBtn = document.getElementById('leave-btn');
const modalOverlay = document.getElementById('modal-overlay');
const roomListModal = document.getElementById('room-list-modal');
const settingsModal = document.getElementById('settings-modal');

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    initializeData();
    renderParticipants();
    renderUserList();
    renderRoomList();
    setupEventListeners();

    // Simulate incoming messages
    simulateChat();
});

// Initialize mock data
function initializeData() {
    // Mock users
    users = [
        { id: 1, name: "Sarah Johnson", status: "speaking", avatar: "S" },
        { id: 2, name: "James Wilson", status: "listening", avatar: "J" },
        { id: 3, name: "Maria Garcia", status: "speaking", avatar: "M" },
        { id: 4, name: "David Kim", status: "listening", avatar: "D" },
        { id: 5, name: "Alex Chen", status: "speaking", avatar: "A" },
        { id: 6, name: "Emma Williams", status: "listening", avatar: "E" },
        { id: 7, name: "Michael Brown", status: "speaking", avatar: "M" },
        { id: 8, name: "Sophia Davis", status: "listening", avatar: "S" },
        { id: 9, name: "William Miller", status: "speaking", avatar: "W" },
        { id: 10, name: "Olivia Wilson", status: "listening", avatar: "O" }
    ];

    // Mock rooms
    rooms = [
        { id: 1, name: "English Practice", users: 12, category: "language", description: "Practice English with learners worldwide" },
        { id: 2, name: "Spanish Conversation", users: 8, category: "language", description: "Hablemos español juntos" },
        { id: 3, name: "French Learners", users: 5, category: "language", description: "Practice French in a friendly environment" },
        { id: 4, name: "Tech Talk", users: 15, category: "topic", description: "Discuss the latest in technology" },
        { id: 5, name: "Gaming", users: 20, category: "topic", description: "Talk about your favorite games" },
        { id: 6, name: "Music Lovers", users: 10, category: "topic", description: "Share your favorite music and artists" },
        { id: 7, name: "USA Region", users: 18, category: "region", description: "For users in the United States" },
        { id: 8, name: "Europe Chat", users: 14, category: "region", description: "Connect with people across Europe" }
    ];
}

// Render participants grid
function renderParticipants() {
    participantsGrid.innerHTML = '';

    users.forEach(user => {
        const participantCard = document.createElement('div');
        participantCard.className = `participant-card ${user.status === 'speaking' ? 'speaking' : ''}`;
        participantCard.innerHTML = `
            <div class="participant-avatar">${user.avatar}</div>
            <div class="participant-info">
                <div class="participant-name">${user.name}</div>
                <div class="participant-status">${user.status}</div>
            </div>
            ${user.status === 'speaking' ? '<div class="speaking-indicator"></div>' : ''}
        `;

        participantsGrid.appendChild(participantCard);
    });

    // Update speaking/listening counts
    const speakingCount = users.filter(user => user.status === 'speaking').length;
    const listeningCount = users.filter(user => user.status === 'listening').length;

    document.getElementById('speaking-count').textContent = speakingCount;
    document.getElementById('listening-count').textContent = listeningCount;
}

// Render user list in sidebar
function renderUserList() {
    userList.innerHTML = '';

    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.innerHTML = `
            <div class="participant-avatar">${user.avatar}</div>
            <div class="participant-name">${user.name}</div>
            <div class="participant-status">${user.status}</div>
        `;

        userList.appendChild(userItem);
    });

    document.getElementById('sidebar-user-count').textContent = users.length;
    document.getElementById('user-count').textContent = users.length;
}

// Render room list in sidebar
function renderRoomList() {
    roomList.innerHTML = '';

    rooms.slice(0, 5).forEach(room => {
        const roomItem = document.createElement('div');
        roomItem.className = 'room-item';
        roomItem.innerHTML = `
            <div class="room-item-header">
                <div class="room-icon">${room.name.charAt(0)}</div>
                <div class="room-title">${room.name}</div>
                <div class="room-users">${room.users}</div>
            </div>
            <div class="room-description">${room.description}</div>
        `;

        roomItem.addEventListener('click', () => joinRoom(room.id));
        roomList.appendChild(roomItem);
    });
}

// Render rooms in modal
function renderRoomsModal(category = 'all') {
    roomsContainer.innerHTML = '';

    const filteredRooms = category === 'all'
        ? rooms
        : rooms.filter(room => room.category === category);

    filteredRooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room-card';
        roomCard.innerHTML = `
            <div class="room-card-header">
                <div class="room-card-title">${room.name}</div>
                <div class="room-card-users">👥 ${room.users}</div>
            </div>
            <div class="room-card-description">${room.description}</div>
            <button class="room-card-join" data-room-id="${room.id}">Join Room</button>
        `;

        roomCard.querySelector('.room-card-join').addEventListener('click', (e) => {
            e.stopPropagation();
            joinRoom(room.id);
        });

        roomsContainer.appendChild(roomCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Mute button
    muteBtn.addEventListener('click', toggleMute);

    // Deafen button
    deafenBtn.addEventListener('click', toggleDeafen);

    // Leave button
    leaveBtn.addEventListener('click', leaveCall);

    // Send message
    document.getElementById('send-message').addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');

            // Update active tab
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });

    // Room category filtering
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');

            // Update active category
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            renderRoomsModal(category);
        });
    });

    // User search
    userSearch.addEventListener('input', () => {
        const searchTerm = userSearch.value.toLowerCase();
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
        renderUserList(filteredUsers);
    });

    // Room search
    roomSearch.addEventListener('input', () => {
        const searchTerm = roomSearch.value.toLowerCase();
        const filteredRooms = rooms.filter(room => room.name.toLowerCase().includes(searchTerm));
        renderRoomList(filteredRooms);
    });
}