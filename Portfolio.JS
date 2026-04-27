// In Portfolio.js Dark mode toggle
// Dark mode toggle functionality
// This code toggles dark mode on and off when the button is clicked
// and saves the user's preference in local storage.
// It also changes the button text to indicate the current mode.
// The button text will show a sun icon for dark mode and a moon icon for light mode.
// The dark mode class is added to the body element when dark mode is active.
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('mode', body.classList.contains('dark-mode') ? 'dark' : 'light');
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

window.onload = () => {
  if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '🌞';
  }
};


// GSAP Animations for scroll-triggered effects
gsap.from(".hero-content h1", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  ease: "power4.out",
});

// Scroll animations for Projects
gsap.utils.toArray('.project-item').forEach(item => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      toggleActions: "play none none none",
    }
  });
});

// Add additional project animations if needed
gsap.from('.project-details', {
  opacity: 0,
  x: 100,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.projects-section',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true,
  }
});



const words = ["Web Developer", "Problem Solver", "Tech Enthusiast", "MERN Stack Dev"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const typedText = document.querySelector(".typed-text");
  if (!typedText) return;

  const current = words[i];
  let display = current.substring(0, j);
  typedText.textContent = display;

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);



// In Portfolio.js scroll to top button
window.addEventListener('DOMContentLoaded', () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
