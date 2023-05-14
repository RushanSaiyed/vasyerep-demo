  $("#carousel-1").owlCarousel({
    loop: false,
    margin: 10,
    dots: false,
    nav: false,
    items: 4,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2
      },

      1024: {
        items: 3
      },

      1366: {
        items: 4
      }
    }
  });

  var owl = $("#carousel-1");
  owl.owlCarousel();
  $(".next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  $(".prev-btn").addClass("disabled");
  $(owl).on("translated.owl.carousel", function (event) {
    if ($(".owl-prev").hasClass("disabled")) {
      $(".prev-btn").addClass("disabled");
    } else {
      $(".prev-btn").removeClass("disabled");
    }
    if ($(".owl-next").hasClass("disabled")) {
      $(".next-btn").addClass("disabled");
    } else {
      $(".next-btn").removeClass("disabled");
    }
  });  


$("#carousel-2").owlCarousel({
  loop: false,
  margin: 10,
  dots: false,
  nav: false,
  items: 4,
  responsive: {
    0: {
      items:1
    },

    600: {
      items:2
    },

    1024: {
      items:3
    },

    1366: {
      items:3
    }
  }
});

var owl1 = $("#carousel-2");
owl1.owlCarousel();
$(".next-btn").click(function () {
  owl1.trigger("next.owl.carousel");
});
$(".prev-btn").click(function () {
  owl1.trigger("prev.owl.carousel");
});
$(".prev-btn").addClass("disabled");
$(owl1).on("translated.owl.carousel", function (event) {
  if ($(".owl-prev").hasClass("disabled")) {
    $(".prev-btn").addClass("disabled");
  } else {
    $(".prev-btn").removeClass("disabled");
  }
  if ($(".owl-next").hasClass("disabled")) {
    $(".next-btn").addClass("disabled");
  } else {
    $(".next-btn").removeClass("disabled");
  }
});
