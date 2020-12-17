$(document).ready(function () {
  var popular_goods_swiper = new Swiper('.popular-goods__slider-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    //   slidesPerGroup: 4,
    freeMode: true,
    //  loopFillGroupWithBlank: true,

    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
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
      // when window width is >= 960px
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
      nextEl: '.popular-goods__swiper-button-next',
      prevEl: '.popular-goods__swiper-button-prev',
    },
  });


});
