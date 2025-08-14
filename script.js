javascript
// JavaScript for handling button clicks and form submission

function showDetails(projectId) {
    alert(`Details for Project ${projectId} will be displayed here.`);
}

// Handling the contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! Your message has been sent.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});


