const checkbox = document.getElementById("checkbox");
const themeLabel = document.getElementById("theme-label");

// Aplicar tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  checkbox.checked = true;
}
themeLabel.textContent = "Modo Escuro";

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Animações ao rolar
const fadeElems = document.querySelectorAll(".fade-in-scroll");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

fadeElems.forEach(el => observer.observe(el));

// Modais
const projetos = document.querySelectorAll(".projeto");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".modal-close");

projetos.forEach(proj => {
  proj.addEventListener("click", () => {
    const modalId = proj.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  });
});
