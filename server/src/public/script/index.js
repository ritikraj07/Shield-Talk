function checkAuthStatus() {
    let token = localStorage.getItem("token");

    if (!token) {
        // Try to get token from URL
        const urlParams = new URLSearchParams(window.location.search);
        token = urlParams.get('accessToken');

        if (token) {
            localStorage.setItem("token", token);
            // Clean URL without token parameter
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }

    if (token) {
        // Fetch user profile
        fetch("http://localhost:3000/v1/api/users/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }
                return response.json();
            })
            .then(user => {
                // Update UI with user data
                // console.log("user", user);
                updateUserUI(user);
            })
            .catch(error => {
                console.error("Error fetching profile:", error);
                // If token is invalid, remove it
                localStorage.removeItem("token");
            });
    }
}

// Function to update UI with user data
function updateUserUI(user) {
    const authButtons = document.querySelector('.auth-buttons');
    const userProfile = document.querySelector('.user-profile');
    const userName = document.querySelector('.user-name');
    const userAvatar = document.querySelector('.user-avatar');

    // Hide auth buttons, show user profile
    authButtons.style.display = 'none';
    userProfile.style.display = 'flex';

    // Update user info
    userName.textContent = `Hello, ${user.name || user.userName}`;
    userAvatar.src = user.avatar || 'https://via.placeholder.com/40';
    userAvatar.alt = user.name || 'User Avatar';
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem("token");

    const authButtons = document.querySelector('.auth-buttons');
    const userProfile = document.querySelector('.user-profile');

    // Show auth buttons, hide user profile
    authButtons.style.display = 'flex';
    userProfile.style.display = 'none';

    // Close dropdown if open
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.remove('show');
}

// Toggle dropdown menu
function setupDropdownToggle() {
    const userProfile = document.querySelector('.user-profile');

    userProfile.addEventListener('click', function (e) {
        // Prevent closing when clicking on the dropdown itself
        if (e.target.closest('.dropdown-menu')) return;

        const dropdown = this.querySelector('.dropdown-menu');
        dropdown.classList.toggle('show');
    });
}

// Close dropdown when clicking outside
function setupOutsideClickHandler() {
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.user-profile')) {
            const dropdown = document.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.classList.remove('show');
            }
        }
    });
}

// Add logout functionality
function setupLogoutHandler() {
    document.getElementById('logout-btn').addEventListener('click', function (e) {
        e.preventDefault();
        handleLogout();
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    checkAuthStatus();
    setupDropdownToggle();
    setupOutsideClickHandler();
    setupLogoutHandler();
});