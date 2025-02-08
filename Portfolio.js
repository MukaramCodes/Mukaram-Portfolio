// Animated Text in Home Section
// const animatedText = document.querySelector('.animated-text');
// const roles = ['Developer', 'SEO Expert', 'Overthinker'];
// let roleIndex = 0;

// setInterval(() => {
//   animatedText.textContent = roles[roleIndex];
//   roleIndex = (roleIndex + 1) % roles.length;
// }, 5000);

// // Mobile Navigation
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });
// Animated Text in Home Section
const animatedText = document.querySelector('.animated-text');
const roles = ['Developer', 'SEO Expert', 'Overthinker'];
let roleIndex = 0;

setInterval(() => {
  animatedText.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}, 3000);

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});