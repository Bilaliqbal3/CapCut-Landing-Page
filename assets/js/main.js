$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 3,
    nav: false,
    dots: true, // Enable dots
    autoplay: true, // Enable autoplay for continuous sliding
    autoplayTimeout: 3000, // Change slide every 3 seconds
    autoplayHoverPause: true, // Pause on hover
    center: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 7 },
    },
  });
});

$(document).ready(function () {
  const owl = $(".owl-carousel");

  // Initialize Owl Carousel
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    center: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 3 },
    },
  });

  // Button to Slide Images Continuously
  $("#sliderButton").on("click", function () {
    setInterval(function () {
      owl.trigger("next.owl.carousel");
    }, 1000); // Change slide every 1 second
  });
});
