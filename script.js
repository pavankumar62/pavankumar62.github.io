// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-bar');
const skillsSection = document.querySelector('#skills');

function animateSkillBars() {
  skillBars.forEach(bar => {
    const skill = bar.getAttribute('data-skill');
    let percent = 0;
    
    if (skill === 'Java') percent = 90;
    if (skill === 'SQL') percent = 85;
    if (skill === 'JavaScript') percent = 80;
    if (skill === 'Spring Boot') percent = 90;
    if (skill === 'Hibernate') percent = 85;
    if (skill === 'ReactJS') percent = 75;
    if (skill === 'AWS') percent = 85;
    if (skill === 'Docker') percent = 80;
    if (skill === 'Kubernetes') percent = 75;
    
    bar.style.setProperty('--width', `${percent}%`);
    bar.querySelector('span').textContent = `${percent}%`;
  });
}

// Animate circular charts
const chartItems = document.querySelectorAll('.chart-item');
chartItems.forEach(item => {
  const percent = item.getAttribute('data-percent');
  const offset = 339.292 - (339.292 * percent / 100);
  const progress = item.querySelector('.chart-progress');
  progress.style.setProperty('--offset', offset);
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'skills') {
        animateSkillBars();
      }
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}
