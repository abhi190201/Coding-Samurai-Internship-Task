// Optional: Smooth scroll to sections
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission alert
const form = document.querySelector('.signup-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for subscribing!');
});
