// ----- Mobile toggle -----
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu when link clicked (mobile)
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if(nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});

// ----- Active scroll section -----
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Prevent actual submit for demo
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Message sent (demo).");
  form.reset();
});