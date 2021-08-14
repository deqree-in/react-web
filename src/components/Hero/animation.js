import anime from "animejs/lib/anime.es.js";

export var fullAnimation = (function () {
  var bigDarkRectangle = anime
    .timeline({
      targets: ".hero-figure-box-05",
      autoplay: false,
      begin: function (anim) {
        smallDarkRectangles.play();
        colouredRectangles.play();
      },
    })
    .add({
      duration: 400,
      easing: "easeInOutExpo",
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: "500px",
    })
    .add({
      duration: 400,
      easing: "easeInOutExpo",
      scaleX: 1,
    })
    .add({
      duration: 800,
      rotateY: "-15deg",
      rotateX: "8deg",
      rotateZ: "-1deg",
    });

  var smallDarkRectangles = anime
    .timeline({
      targets: ".hero-figure-box-06, .hero-figure-box-07",
      autoplay: false,
    })
    .add({
      duration: 400,
      easing: "easeInOutExpo",
      scaleX: [0.05, 0.05],
      scaleY: [0, 1],
      perspective: "500px",
    })
    .add({
      duration: 400,
      easing: "easeInOutExpo",
      scaleX: 1,
    })
    .add({
      duration: 800,
      rotateZ: "20deg",
    });

  var colouredRectangles = anime
    .timeline({
      targets:
        ".hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10",
      autoplay: false,
    })
    .add({
      duration: anime.random(600, 800),
      delay: anime.random(600, 800),
      rotate: [
        anime.random(-360, 360),
        function (el) {
          return el.getAttribute("data-rotation");
        },
      ],
      scale: [0.7, 1],
      opacity: [0, 1],
      easing: "easeInOutExpo",
    });

  function init() {
    setTimeout(function () {
      bigDarkRectangle.play();
    }, 1000);
  }

  return {
    init: init,
  };
})();
