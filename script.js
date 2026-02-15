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

