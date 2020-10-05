$('.header__slider').slick({
  infinite: true,
  fade:true,
  prevArrow:  `<svg class='header__slider-arrows slider-arrows slick-prev'>
  <use xlink:href="img/svg/sprite/sprite.svg#arrow-slider"></use>
  </svg>`,
  nextArrow: `<svg class='header__slider-arrows slider-arrows slick-next'>
  <use xlink:href="img/svg/sprite/sprite.svg#arrow-slider"></use>
  </svg>`,
  asNavFor: '.header-slider-nav'
});



$('.header-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '.header__slider',
  // swipeToSlide: false,
  // centerMode: false,
  //variableWidth: true,
  arrows: false,
  dots: false,
  focusOnSelect: false,

});


