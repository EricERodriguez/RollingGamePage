//Ejecutar cuando cargue la página!
var open;

function init() {
  open = document.getElementsByClassName("open");
  for (let i = 0; i < open.length; i++) {
    open[i].addEventListener("click", () => {
      modalContainer.classList.add("mostrar-modal");
      console.log(open[i].id);
      let integrante = filtrarPorIdentificador(open[i].id);
      console.log(integrante);
      cargarModal(integrante);
    });
  }
}
init();
const integrantes = [
  {
    nombre: "Francisco Nahuel Zelaya",
    nacimiento: "18 de Abril de 1993",
    educacion: "Universidad Nacional de Tucumán UNT",
    descri:
      "Profesional ambicioso y con formación en recursos humanos. Capaz de trabajar independientemente o en equipo. Siempre comprometido a mantener un ambiente de trabajo positivo con los compañeros.",
    urlImg: "/img/us/user1a.jpg",
    identificador: "nahuel",
  },
  {
    nombre: "Agustín Gómez Aranda",
    nacimiento: "19 de Agosto de 1996",
    educacion: "Universidad Tecnológica Tucumán UTN",
    descri:
      "Diseñador gráfico apasionado de la comunicación creativa, el arte y el diseño. Especializado en desarrollo web, branding y conceptualización de ideas. De personalidad entusiaste, sincera y perfeccionista.",
    urlImg: "/img/us/user2a.jpeg",
    identificador: "agustin",
  },
  {
    nombre: "Benjamin Morton",
    nacimiento: "9 de Enero de 1995",
    educacion: "Universidad Nacional de Tucumán UNT",
    descri:
      "Ingeniero informático especializado en la programación Javascript. Más de 50 proyectos concretados, tanto a nivel internacional como trabajando en equipos de 10 personas. De mente positiva y ágil comprensión.",
    urlImg: "/img/us/user3a.jpeg",
    identificador: "benjamin",
  },
  {
    nombre: "Eric Eduardo Rodriguez",
    nacimiento: "29 de Febrero de 1990",
    educacion: "Universidad Nacional de Córdoba UNC",
    descri:
      "Consultor experimentado y comprometido con más de 10 años de experiencia ayudando a clientes a conocer y superar los objetivos del negocio. Destreza de abordar problemas y desafíos complejos.",
    urlImg: "/img/us/user4a.jpeg",
    identificador: "eric",
  },
];

const modalContainer = document.getElementById("modal-container");
const close = document.getElementById("close");

console.log(open);
close.addEventListener("click", () => {
  modalContainer.classList.remove("mostrar-modal");
});

function filtrarPorIdentificador(valor) {
  let integrante = integrantes.filter((c) => c.identificador == valor);
  return integrante;
}

function cargarModal(persona) {
  let titulo = document.getElementById("modal_titulo");
  let descripcion = document.getElementById("modal_descripcion");
  let datos = document.getElementById("modal_datos");
  let perfil = document.getElementById("imagen_modal");
  console.log(persona);

  titulo.innerHTML = persona[0].nombre;
  datos.innerHTML =
    "Fecha de nacimiento: " +
    persona[0].nacimiento +
    "<br>" +
    "Estudió en:  " +
    persona[0].educacion;
  descripcion.innerHTML = persona[0].descri;
  perfil.src = persona[0].urlImg;
}
