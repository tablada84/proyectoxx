const imagenes = document.querySelectorAll(".img-imagenes");
const imageLuz = document.querySelector(".agregar-imagen");
const contenedorLuz = document.querySelector(".image-luz");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

contenedorLuz.addEventListener("click", (e) => {
  if (e.target !== imageLuz) {
    contenedorLuz.classList.toggle("show");
    imageLuz.classList.toggle("showImagen");
  }
});

const aparecerImagen = (imagen) => {
  imageLuz.src = imagen;
  contenedorLuz.classList.toggle("show");
  imageLuz.classList.toggle("showImagen");
};
