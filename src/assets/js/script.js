$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 7000,
    delay: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Navbar Click start
$(".navbar_click_icon .icon .openSidebar").click(function () {
  document.body.classList.add("active");
});

$("header .sidebar .close").click(function () {
  document.body.classList.remove("active");
});
