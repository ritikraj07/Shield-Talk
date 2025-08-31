
// State management
let videoEnabled = true;
let audioEnabled = true;
let screenSharing = false;
let chatVisible = false;
let participantsVisible = true;
let selfViewMinimized = false;
let pinnedParticipants = [1]; // Array of pinned participant IDs
let mobileSidebarVisible = false;

// Meet timer
let meetSeconds = 332; // 5:32 in seconds
const meetTimer = document.getElementById('meet-timer');
const mobileSidebar = document.getElementById('mobile-sidebar');
const overlay = document.getElementById('overlay');

// Update timer every second
setInterval(() => {
    meetSeconds++;
    const hours = Math.floor(meetSeconds / 3600);
    const minutes = Math.floor((meetSeconds % 3600) / 60);
    const seconds = meetSeconds % 60;

    meetTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}, 1000);

// Simulate connection process
simulateConnections();

function simulateConnections() {
    // Simulate Maria connecting
    setTimeout(() => {
        const mariaVideo = document.querySelectorAll('.video-item')[2];
        const placeholder = mariaVideo.querySelector('.video-placeholder');

        placeholder.classList.remove('connecting');
        placeholder.innerHTML = `
                    <div class="icon">👤</div>
                    <div>Maria Garcia</div>
                `;

        // Add simulated video feed
        const videoElement = document.createElement('div');
        videoElement.className = 'video-feed';
        videoElement.style.background = 'linear-gradient(135deg, #3a0ca3, #4361ee)';
        videoElement.style.display = 'flex';
        videoElement.style.alignItems = 'center';
        videoElement.style.justifyContent = 'center';
        videoElement.style.color = 'white';
        videoElement.style.fontSize = '1rem';
        videoElement.innerHTML = 'Maria Garcia';

        mariaVideo.appendChild(videoElement);
    }, 2000);

    // Simulate David connecting
    setTimeout(() => {
        const davidVideo = document.querySelectorAll('.video-item')[3];
        const placeholder = davidVideo.querySelector('.video-placeholder');

        placeholder.innerHTML = `
    <div class="icon">👤</div>
    <div>David Kim</div>
    `;

        // Add simulated video feed
        const videoElement = document.createElement('div');
        videoElement.className = 'video-feed';
        videoElement.style.background = 'linear-gradient(135deg, #0c7b3a, #1ee243)';
        videoElement.style.display = 'flex';
        videoElement.style.alignItems = 'center';
        videoElement.style.justifyContent = 'center';
        videoElement.style.color = 'white';
        videoElement.style.fontSize = '1rem';
        videoElement.innerHTML = 'David Kim';

        davidVideo.appendChild(videoElement);
    }, 3500);
}

function toggleVideo() {
    videoEnabled = !videoEnabled;
    const controlVideo = document.getElementById('control-video');

    if (videoEnabled) {
        controlVideo.classList.add('active');
    } else {
        controlVideo.classList.remove('active');
    }

    // Update self view
    const selfView = document.querySelector('.self-view-container .video-placeholder .icon');
    selfView.textContent = videoEnabled ? '👤' : '📹❌';
}

function toggleAudio() {
    audioEnabled = !audioEnabled;
    const controlAudio = document.getElementById('control-audio');

    if (audioEnabled) {
        controlAudio.classList.remove('mute-btn');
    } else {
        controlAudio.classList.add('mute-btn');
    }

    // Update self view
    const selfView = document.querySelector('.self-view-container .action-btn:nth-child(2)');
    selfView.textContent = audioEnabled ? '🎤' : '🎤❌';
}

function toggleRemoteMute(participantId) {
    const participant = document.querySelector(`.participant-item:nth-child(${participantId + 1}) .participant-status`);
    const muteBtn = document.querySelector(`.video-item:nth-child(${participantId}) .mute-btn`);

    if (participant.classList.contains('muted')) {
        participant.classList.remove('muted');
        muteBtn.classList.remove('active');
    } else {
        participant.classList.add('muted');
        muteBtn.classList.add('active');
    }
}

function togglePin(participantId) {
    const pinBtn = document.querySelector(`.video-item:nth-child(${participantId}) .pin-btn`);
    const videoItem = document.querySelector(`.video-item:nth-child(${participantId})`);
    const pinnedSection = document.getElementById('pinned-section');

    if (pinBtn.classList.contains('active')) {
        // Unpin
        pinBtn.classList.remove('active');
        videoItem.classList.remove('pinned');

        // Move to participants grid
        document.getElementById('participants-grid').appendChild(videoItem);

        // Remove from pinned array
        pinnedParticipants = pinnedParticipants.filter(id => id !== participantId);
    } else {
        // Pin (max 2 pinned)
        if (pinnedParticipants.length >= 2) {
            // Unpin the first pinned
            togglePin(pinnedParticipants[0]);
        }

        pinBtn.classList.add('active');
        videoItem.classList.add('pinned');

        // Move to pinned section
        pinnedSection.appendChild(videoItem);

        // Add to pinned array
        pinnedParticipants.push(participantId);
    }
}

function shareScreen() {
    screenSharing = !screenSharing;
    alert(screenSharing ? 'Screen sharing started' : 'Screen sharing stopped');
}

function toggleChat() {
    chatVisible = !chatVisible;
    alert(chatVisible ? 'Chat opened' : 'Chat closed');
}

function toggleMobileSidebar() {
    mobileSidebarVisible = !mobileSidebarVisible;

    if (mobileSidebarVisible) {
        mobileSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        mobileSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function toggleSettings() {
    alert('Settings panel would open here');
}

function toggleSelfView() {
    selfViewMinimized = !selfViewMinimized;
    const selfView = document.getElementById('self-view');

    if (selfViewMinimized) {
        selfView.classList.add('minimized');
        document.querySelector('.self-view-toggle').textContent = '+';
    } else {
        selfView.classList.remove('minimized');
        document.querySelector('.self-view-toggle').textContent = '−';
    }
}

function endCall() {
    if (confirm('Are you sure you want to end the call for everyone?')) {
        window.location.href = 'mode-selection.html';
    }
}

function copyMeetCode() {
    const meetCode = document.getElementById('meet-code').textContent;
    navigator.clipboard.writeText(meetCode);
    alert(`Meeting code ${meetCode} copied to clipboard!`);
}

// Close mobile sidebar when clicking outside
overlay.addEventListener('click', function () {
    toggleMobileSidebar();
});

// Handle window resize
window.addEventListener('resize', function () {
    if (window.innerWidth > 968 && mobileSidebarVisible) {
        toggleMobileSidebar();
    }
});
