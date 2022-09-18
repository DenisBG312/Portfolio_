$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".navbar").css("background", "#212529");
  } else {
    $(".navbar").css("background", "transparent");
  }
});

//REVIEWS
$(".reviews-sider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  items: 1,
  smartSpeed: 600,
});
