document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signup-btn");
    const modal = document.getElementById("signup-modal");
    const closeBtn = document.querySelector(".modal .close");

    signupBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.getElementById("signup-form").addEventListener("submit", (event) => {
        event.preventDefault();
        modal.style.display = "none";
        alert("Thank you for signing up! The full whitepaper will be sent to your email.");
    });
});
