$(document).ready(function() {

    $('.partners_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: '<div class="partners_slider-arrow arrows_prev"></div>',
      prevArrow: '<div class="partners_slider-arrow arrows_next"></div>',
      responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });

});
