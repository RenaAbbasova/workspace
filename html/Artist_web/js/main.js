//switch light and dark mode 
const toggleLightDark = () => {
    const body = document.querySelector('body');
    body.classList.toggle('light');
};

// actors page
let currentPage = 1;
const totalPages = 10;

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePaginationButtons();
        // Logic to display the previous page content
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePaginationButtons();
        // Logic to display the next page content
    }
}

function updatePaginationButtons() {
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = currentPage === totalPages;
}

updatePaginationButtons(); // Initialize button states

// acter page
function toggleMoreInfo(actorId) {
    const moreInfoContent = document.getElementById(actorId);
    if (moreInfoContent.style.display === "none" || moreInfoContent.style.display === "") {
        moreInfoContent.style.display = "block"; // Show more info
    } else {
        moreInfoContent.style.display = "none"; // Hide more info
    }
}


// forgot password page

function redirectToLogin(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Add any additional validation or actions here if needed
    window.location.href = "login.html"; // Redirect to login.html
}
