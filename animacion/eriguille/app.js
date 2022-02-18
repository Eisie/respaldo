let triste = false;

const cambiarCarita = () => {
  $(".imagen").attr("src", "./img/billy2.png");
  $(".audio")[0].play();

  $(".boton").off("click");
  setTimeout(() => {
    $(".imagen").attr("src", "./img/billy3.png");
    habilitarBotones();
    habilitarBotones2();
    habilitarBotones3();
  }, 5000);
};




const habilitarBotones = () => {
  $("#boton-terere").on("click", cambiarCarita);
};

$(document).ready(function () {
  //variables
  habilitarBotones();
});



const cambiarCarita2 = () => {
  $(".imagen").attr("src", "./img/billy4.png");
  $(".audio2")[0].play();

  $(".boton").off("click");
  setTimeout(() => {
    $(".imagen").attr("src", "./img/billy3.png");
    habilitarBotones2();
    habilitarBotones();
    habilitarBotones3();
  }, 28000);
};

const habilitarBotones2 = () => {
  $("#boton-musica").on("click", cambiarCarita2);
};
$(document).ready(function () {
  //variables
  habilitarBotones2();
});


const cambiarCarita3 = () => {
  $(".imagen").attr("src", "./img/comiendo.png");
  $(".audio3")[0].play();

  $(".boton").off("click");
  setTimeout(() => {
    $(".imagen").attr("src", "./img/billy3.png");
    habilitarBotones();
    habilitarBotones3();
    habilitarBotones2();
  }, 5000);
};

const habilitarBotones3 = () => {
  $("#boton-chipa").on("click", cambiarCarita3);
};
$(document).ready(function () {
  //variables
  habilitarBotones3();
});






