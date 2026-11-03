const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


// Filtros de habilidades: se muestran únicamente las tarjetas seleccionadas.
const skillFilters = document.querySelectorAll('.skill-filter');
const competencyCards = document.querySelectorAll('.competency-card');
skillFilters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  skillFilters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  let visible = 0;
  competencyCards.forEach(card => {
    const show = category === 'Todas' || card.dataset.category === category;
    card.hidden = !show;
    if (show) visible++;
  });
  const empty = document.getElementById('skills-empty');
  if (empty) empty.hidden = visible !== 0;
}));

// Copia de contacto sin dependencias externas.
document.querySelectorAll('.copy-contact').forEach(button => {
  button.addEventListener('click', async () => {
    const previous = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = '¡Copiado!';
      setTimeout(() => { button.textContent = previous; }, 1800);
    } catch {
      button.textContent = 'Selecciona el dato';
      setTimeout(() => { button.textContent = previous; }, 1800);
    }
  });
});
