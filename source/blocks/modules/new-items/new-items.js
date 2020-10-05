$( document ).ready(function() {
  var new_items_swiper = new Swiper('.new-items__slider-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
 //   slidesPerGroup: 4,
    freeMode: true,
  //  loopFillGroupWithBlank: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 765px
    765: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
    navigation: {
      nextEl: '.new-items__swiper-button-next',
      prevEl: '.new-items__swiper-button-prev',
    },
  });

});
