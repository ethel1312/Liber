/*carrito */
const fila = document.querySelector('.contenedor-carousel');
const productos = document.querySelectorAll('.producto');


const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

const fila2 = document.querySelector('.contenedor-carousel2');
const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

const fila3 = document.querySelector('.contenedor-carousel3');
const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');

const fila4 = document.querySelector('.contenedor-carousel4');
const flechaIzquierda4 = document.getElementById('flecha-izquierda4');
const flechaDerecha4 = document.getElementById('flecha-derecha4');

flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;
});

flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;
});
flechaDerecha2.addEventListener('click', () => {
  fila2.scrollLeft += fila2.offsetWidth;
});

flechaIzquierda2.addEventListener('click', () => {
  fila2.scrollLeft -= fila2.offsetWidth;
});
flechaDerecha3.addEventListener('click', () => {
  fila3.scrollLeft += fila3.offsetWidth;
});

flechaIzquierda3.addEventListener('click', () => {
  fila3.scrollLeft -= fila3.offsetWidth;
});

flechaDerecha4.addEventListener('click', () => {
  fila4.scrollLeft += fila4.offsetWidth;
});

flechaIzquierda4.addEventListener('click', () => {
  fila4.scrollLeft -= fila4.offsetWidth;
});

// inicio de sesion

function togglePassword(btn) {
  const container = btn.closest(".contraseña-container");
  const pass = container.querySelector(".pass");
    icon = document.querySelector(".fa-solid");

    if (pass.type === "password") {
      pass.type = "text";
      icon.classList.remove("fa-eye")
      icon.classList.add("fa-eye-slash")
    } else {
      pass.type = "password"
      icon.classList.add("fa-eye")
      icon.classList.remove("fa-eye-slash")
    }
  
}






