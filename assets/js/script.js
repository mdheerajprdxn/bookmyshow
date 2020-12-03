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

  // FAQ
  let active = 0;
  var faqHeadings = $(".faq-heading li");
  var faqs = $(".faq-content>li");

  showFaq();

  faqHeadings.each((index, item) => {
    item.addEventListener("click", handleFaq);
  });

  //   sets the active index no to the one that is clicked
  function handleFaq(e) {
    let clickedHeading = e.target;
    let foundIndex = null;
    faqHeadings.each((index, item) => {
      if (item == clickedHeading) {
        foundIndex = index;
      }
    });
    active = foundIndex;
    showFaq();
  }

  //   hides all FAQs then shows only one with active index
  function showFaq() {
    faqs.each((index, item) => {
      item.style.display = "none";
    });
    faqs.each((index, item) => {
      if (index == active) {
        item.style.display = "block";
      }
    });
  }
});
