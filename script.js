// Vanilla JS for toggling menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navi-bar");

hamburger.addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".navigation").classList.remove("active");
  });
});