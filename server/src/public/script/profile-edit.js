
// Toggle interest checkboxes
function toggleInterest(interest) {
    const checkbox = document.getElementById(`${interest}-checkbox`);
    checkbox.classList.toggle("checked");
}

// Save profile changes
function saveProfile() {
    // In a real application, this would send data to a server
    alert("Profile changes saved successfully!");
    window.location.href = "profile.html";
}

// Initialize with some checked interests based on the image
document.addEventListener("DOMContentLoaded", function () {
    // Photography is checked by default (as in the image)
    document.getElementById("photo-checkbox").classList.add("checked");
});
