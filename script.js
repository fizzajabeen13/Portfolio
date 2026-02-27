// Select all elements that should animate on scroll
const revealElements = document.querySelectorAll(
  '.section, .feature-card, .project-card, .skill-badge, .contact, .hero-block'
);

// Add base reveal class
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.15 }
);

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links'); // class selector
  const navItems = document.querySelectorAll('.nav-links li a'); // all links inside nav

  // Toggle hamburger menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when any link is clicked (mobile-friendly)
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });
});
