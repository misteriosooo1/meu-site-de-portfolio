// Aplicar tema salvo ao carregar
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  document.getElementById("toggle-theme").textContent = "☀️";
}

// Animação ao rolar
const fadeElems = document.querySelectorAll(".fade-in-scroll");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

fadeElems.forEach(el => observer.observe(el));

// Modal
const projetos = document.querySelectorAll(".projeto");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".modal-close");

projetos.forEach(proj => {
  proj.addEventListener("click", () => {
    const modalId = proj.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// Tema escuro
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});
