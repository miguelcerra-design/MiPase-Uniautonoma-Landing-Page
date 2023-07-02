
/* bersion 3  con carga primero del DOM*/

window.addEventListener('load', () => {
    const button = document.querySelector('.nav__button') as HTMLButtonElement;
    const nav = document.querySelector('.nav__menu') as HTMLElement;
    const navLinks = document.querySelectorAll('.nav__link') as NodeListOf<HTMLElement>;
    const navBlank = document.querySelector('.nav__blank') as HTMLElement;

    button.addEventListener('click', () => {
      nav.classList.toggle('nav__menu--active');
    });

    navBlank.addEventListener('click', () => {
      nav.classList.remove('nav__menu--active')
    });
  
    // document.addEventListener('click', (event) => {
    //   const target = event.target as HTMLElement;
    //   if (target !== button && !nav.contains(target)) {
    //     nav.classList.remove('nav__menu--active');
    //   }
    // });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav__menu--active');
      });
    });
  
    function displayTime(): void {
      const now: Date = new Date();
      const time: string = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      const displayTime: HTMLElement | null = document.getElementById('display-time');
      if (displayTime) {
        displayTime.innerHTML = time;
      }
    }
  
    setInterval(displayTime, 1000);
  });


// Obtener los elementos del DOM
const modalTerminos = document.querySelector('#modal--terminos') as HTMLElement;
const modalPolitica = document.querySelector('#modal--politica') as HTMLElement;
const botonTerminos = document.querySelector('.footer__button--terminos') as HTMLElement;
const botonPoliticas = document.querySelector('.footer__button--politicas') as HTMLElement;
const botonCerrar = document.querySelectorAll('.modal__close') as NodeListOf<HTMLButtonElement>;
const modals = document.querySelectorAll('.modal') as NodeListOf<HTMLElement>;

// Función para abrir el modal de términos
function abrirModalTerminos() {
  modalTerminos.classList.add('active');
  botonCerrar.forEach((boton: HTMLButtonElement) => {
    boton.disabled = false;    
  });
  
}

// Función para abrir el modal de política
function abrirModalPolitica() {
  modalPolitica.classList.add('active');
  botonCerrar.forEach((boton: HTMLButtonElement) => {
    boton.disabled = false;
  });
}

// Función para cerrar los modales
function cerrarModal() {
  modals.forEach((modal) => {
    modal.classList.remove('active');
  });
  botonCerrar.forEach((boton: HTMLButtonElement) => {
    boton.disabled = true;
  });
}

// Agregar evento de clic al botón de términos para abrir el modal correspondiente
botonTerminos.addEventListener('click', abrirModalTerminos);
botonPoliticas.addEventListener('click', abrirModalPolitica);

// Agregar evento de clic a los botones de cierre para cerrar los modales correspondientes
botonCerrar.forEach((btn) => {
  btn.addEventListener('click', cerrarModal);
});

// Agregar evento de clic al modal para cerrar los modales correspondientes al hacer clic afuera de ellos
modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });
});


