$( document ).ready(function() {
  var swiper = new Swiper('.promo__slider-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
