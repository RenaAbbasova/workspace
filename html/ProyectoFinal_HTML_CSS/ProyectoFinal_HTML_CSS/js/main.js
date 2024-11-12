/* index.html page
switch light and dark mode  */
const toggleLightDark = () => {
    const body = document.querySelector('body');
    body.classList.toggle('light');
};

/*  actores.html page
 codigo para poder usar el boton MORE */
function toggleMoreInfo(actorId) {
    const moreInfoContent = document.getElementById(actorId);
    if (moreInfoContent.style.display === "none" || moreInfoContent.style.display === "") {
        moreInfoContent.style.display = "block"; // Show more info
    } else {
        moreInfoContent.style.display = "none"; // Hide more info
    }
}


/*  forgot-password page
 para volver a la pagina anterior */
function redirectToLogin(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    window.location.href = "login.html"; // Redirect to login.html
}


/* script for login page  */

// Get form and elements
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Email Validation (For username)
usernameInput.addEventListener('input', () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(usernameInput.value)) {
        usernameError.style.display = 'inline';
    } else {
        usernameError.style.display = 'none';
    }
});

// Password Validation
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 6) {
        passwordError.style.display = 'inline';
    } else {
        passwordError.style.display = 'none';
    }
});

// Prevent form submission if validation fails
form.addEventListener('submit', (e) => {
    if (usernameError.style.display === 'inline' || passwordError.style.display === 'inline') {
        e.preventDefault(); // Prevent form submission if errors exist
    }
});
