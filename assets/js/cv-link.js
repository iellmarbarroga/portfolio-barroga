// cv-link.js
const cvLink = "https://drive.google.com/file/d/17C2C9um8DgOSianEbeiblos6Iqz-Hiiz/view?usp=sharing";

// Function to set the CV link dynamically
function setCVLink() {
    const cvElements = document.querySelectorAll('.cv-link');
    cvElements.forEach(element => {
        element.href = cvLink;
    });
}

// Run the function when the page loads
window.onload = setCVLink;
