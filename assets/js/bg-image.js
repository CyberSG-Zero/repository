const elementos = document.querySelectorAll(".section.full-width");
elementos.forEach((elemento) => {
  const imagen = elemento.dataset.bg;
  elemento.style.backgroundImage = `url(${imagen})`;
});