/* Author: 

*/

$(document).ready(function () {
  var owl = $(".campaigns .owl-carousel");
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });

  var owl2 = $(".testimonials .owl-carousel");
  owl2.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });
});
