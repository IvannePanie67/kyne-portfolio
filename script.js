const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav-links");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
