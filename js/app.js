/* bersion 3  con carga primero del DOM*/
window.addEventListener('load', function () {
    var button = document.querySelector('.nav__button');
    var nav = document.querySelector('.nav__menu');
    var navLinks = document.querySelectorAll('.nav__link');
    var navBlank = document.querySelector('.nav__blank');
    button.addEventListener('click', function () {
        nav.classList.toggle('nav__menu--active');
    });
    navBlank.addEventListener('click', function () {
        nav.classList.remove('nav__menu--active');
    });
    // document.addEventListener('click', (event) => {
    //   const target = event.target as HTMLElement;
    //   if (target !== button && !nav.contains(target)) {
    //     nav.classList.remove('nav__menu--active');
    //   }
    // });
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('nav__menu--active');
        });
    });
    function displayTime() {
        var now = new Date();
        var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        var displayTime = document.getElementById('display-time');
        if (displayTime) {
            displayTime.innerHTML = time;
        }
    }
    setInterval(displayTime, 1000);
});
// Obtener los elementos del DOM
var modalTerminos = document.querySelector('#modal--terminos');
var modalPolitica = document.querySelector('#modal--politica');
var botonTerminos = document.querySelector('.footer__button--terminos');
var botonPoliticas = document.querySelector('.footer__button--politicas');
var botonCerrar = document.querySelectorAll('.modal__close');
var modals = document.querySelectorAll('.modal');
// Función para abrir el modal de términos
function abrirModalTerminos() {
    modalTerminos.classList.add('active');
    botonCerrar.forEach(function (boton) {
        boton.disabled = false;
    });
}
// Función para abrir el modal de política
function abrirModalPolitica() {
    modalPolitica.classList.add('active');
    botonCerrar.forEach(function (boton) {
        boton.disabled = false;
    });
}
// Función para cerrar los modales
function cerrarModal() {
    modals.forEach(function (modal) {
        modal.classList.remove('active');
    });
    botonCerrar.forEach(function (boton) {
        boton.disabled = true;
    });
}
// Agregar evento de clic al botón de términos para abrir el modal correspondiente
botonTerminos.addEventListener('click', abrirModalTerminos);
botonPoliticas.addEventListener('click', abrirModalPolitica);
// Agregar evento de clic a los botones de cierre para cerrar los modales correspondientes
botonCerrar.forEach(function (btn) {
    btn.addEventListener('click', cerrarModal);
});
// Agregar evento de clic al modal para cerrar los modales correspondientes al hacer clic afuera de ellos
modals.forEach(function (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            cerrarModal();
        }
    });
});
