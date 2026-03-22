const hamburger = document.querySelector('.hamburger-box');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('mouseenter', () => {
    hamburger.classList.toggle('rotate');
});

hamburger.addEventListener('mouseleave', () => {
    hamburger.classList.toggle('rotate');
});

hamburger.addEventListener('click', () => {
    navList.classList.toggle('hide');
});

// reveal on scroll
const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

// not remember loads
history.scrollRestoration = 'manual';