// Navbar Scroll Animation
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// GSAP Animations
gsap.from(".navbar", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".home-section", { opacity: 0, y: 50, duration: 1, delay: 1 });

// ScrollReveal Animations
ScrollReveal().reveal(".about-section", { delay: 300, distance: "50px", origin: "bottom" });
ScrollReveal().reveal(".projects-section", { delay: 400, distance: "50px", origin: "bottom" });
ScrollReveal().reveal(".links-section", { delay: 500, distance: "50px", origin: "bottom" });