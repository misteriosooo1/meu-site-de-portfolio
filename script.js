const checkbox = document.getElementById("checkbox");
const themeLabel = document.getElementById("theme-label");

<<<<<<< HEAD
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
=======
// Aplicar tema salvo ao carregar
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    checkbox.checked = true;
}

// Definir o texto fixo como "Modo Escuro"
themeLabel.textContent = "Modo Escuro";

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});


// Animação ao rolar
const fadeElems = document.querySelectorAll(".fade-in-scroll");

>>>>>>> e93bb94cc1ace6b028dce45648dc79626c11fb41
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
<<<<<<< HEAD
}, { threshold: 0.1 });

fadeElems.forEach(el => observer.observe(el));

// Modais
=======
}, {
  threshold: 0.1
});

fadeElems.forEach(el => observer.observe(el));

// Modal
>>>>>>> e93bb94cc1ace6b028dce45648dc79626c11fb41
const projetos = document.querySelectorAll(".projeto");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".modal-close");

projetos.forEach(proj => {
  proj.addEventListener("click", () => {
    const modalId = proj.getAttribute("data-modal");
<<<<<<< HEAD
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
=======
    document.getElementById(modalId).style.display = "flex";
>>>>>>> e93bb94cc1ace6b028dce45648dc79626c11fb41
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
<<<<<<< HEAD
    const modal = btn.closest(".modal");
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
=======
    btn.closest(".modal").style.display = "none";
>>>>>>> e93bb94cc1ace6b028dce45648dc79626c11fb41
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
<<<<<<< HEAD
    if (e.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  });
});
=======
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

>>>>>>> e93bb94cc1ace6b028dce45648dc79626c11fb41
