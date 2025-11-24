// Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Booking Form Validation 
// ------------------ Booking Form Validation ------------------
const form = document.getElementById("booking-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !service || !date || !time) {
        alert("Please fill all fields properly.");
        return;
    }

    // Success message popup
    alert("🎉 Appointment Booked Successfully!\nWe will contact you soon.");
    
    form.reset(); // clear form after booking
});

// Header Scroll Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shadow");
    } else {
        header.classList.remove("shadow");
    }
});

