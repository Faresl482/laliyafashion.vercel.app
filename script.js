// script.js

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});

// Form Validation
const form = document.querySelector('.contact-form form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        alert('Message sent successfully!');
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        alert('Please enter a valid email.');
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sendmail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_mcamqhx","template_fgljenc", parms).then(alert("Message sent successfully!")) 
}