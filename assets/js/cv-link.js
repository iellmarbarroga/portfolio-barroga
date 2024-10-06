// cv-link.js
const cvLink = "https://drive.google.com/file/d/1BT9svJ4FM4SnlVCVmt5bM8Vvf9oz9HCW/view?usp=drive_link";

// Function to set the CV link dynamically
function setCVLink() {
    const cvElements = document.querySelectorAll('.cv-link');
    cvElements.forEach(element => {
        element.href = cvLink;
    });
}

// Run the function when the page loads
window.onload = setCVLink;
