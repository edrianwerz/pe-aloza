// Menú hamburguesa
def toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
}

// Carrusel
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

// Buscador catálogo
const buscador = document.getElementById('buscador');
const catalogoGrid = document.getElementById('catalogoGrid');

if (buscador) {
  buscador.addEventListener('input', () => {
    const texto = buscador.value.toLowerCase();
    const items = catalogoGrid.querySelectorAll('.item');

    items.forEach(item => {
      const nombre = item.getAttribute('data-nombre').toLowerCase();
      item.style.display = nombre.includes(texto) ? 'block' : 'none';
    });
  });
}

// Testimonios dinámicos
const form = document.getElementById('formTestimonio');
const contenedor = document.getElementById('contenedorTestimonios');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombreTestimonio').value;
    const mensaje = document.getElementById('mensajeTestimonio').value;

    const nuevoTestimonio = document.createElement('blockquote');
    nuevoTestimonio.innerHTML = `<p>"${mensaje}"</p><footer>- ${nombre}</footer>`;
    contenedor.appendChild(nuevoTestimonio);

    form.reset();
  });
}
