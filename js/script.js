// Hamburger menu toggle
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});

// Close menu when a link is clicked (mobile UX)
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
  });
});

// Sticky navbar shadow on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 2px 16px rgba(0,0,0,0.25)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
