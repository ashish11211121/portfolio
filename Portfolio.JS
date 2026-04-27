// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// In Portfolio.js Dark mode toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('mode', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '🌞' : '🌙';
  
  // Animate body background color change for extra smoothness
  gsap.to(body, {
    backgroundColor: isDark ? '#0f172a' : '#f8fafc',
    duration: 0.5
  });
});

window.onload = () => {
  if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '🌞';
  }
};


// GSAP Animations for hero section
gsap.from(".hero-content h1", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.2
});

gsap.from(".hero-content h2, .hero-content h3", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power3.out",
  delay: 0.5,
  stagger: 0.2
});

// Scroll animations for Project Cards are handled by AOS in index.html



const words = ["Ashish Singh", "Full Stack Developer", "MERN Expert", "UI/UX Designer"];
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
