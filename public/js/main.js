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
$( document ).ready(function() {
$('.search__tabs-item').on('click', function(e) {
  e.preventDefault();
  $('.search__tabs-item').removeClass('search__tabs-item--active');
  $('.search__content-item').removeClass('search__content-item--active');
  $(this).addClass('search__tabs-item--active');
  console.log($($(this).attr('href')))
  $($(this).attr("href")).addClass('search__content-item--active')
})
});
// $( document ).ready(function() {
//   $('.tabs__item').on('click', function(e) {
//     e.preventDefault();
//     console.log($(this).closest('ul').find('.tabs__item'))
//     $('.tabs__item').removeClass('tabs__item--active');
//     $('.tabs__content-item').removeClass('tabs__content-item--active');
//     $(this).addClass('tabs__item--active');
//    // console.log($($(this).attr('href')))
//    // console.log($(this).parent('div'))

//     $($(this).attr("href")).addClass('tabs__content-item--active')
//   })
//   });
$( document ).ready(function() {
  $('.tabs__item').on('click', function(e) {
    e.preventDefault();
    console.log($(this).closest('div').next().find('.tabs__content-item'))
    $(this).closest('ul').find('.tabs__item').removeClass('tabs__item--active');
    $(this).closest('div').next().find('.tabs__content-item').removeClass('tabs__content-item--active');
    $(this).addClass('tabs__item--active');
    $($(this).attr("href")).addClass('tabs__content-item--active')
  })
  });
// $( document ).ready(function() {
//   $('.tabs__item').on('click', function(e) {
//     e.preventDefault();
//     console.log($(this).closest('ul').find('.tabs__item'))
//     $('.tabs__item').removeClass('tabs__item--active');
//     $('.tabs__content-item').removeClass('tabs__content-item--active');
//     $(this).addClass('tabs__item--active');
//    // console.log($($(this).attr('href')))
//    // console.log($(this).parent('div'))

//     $($(this).attr("href")).addClass('tabs__content-item--active')
//   })
//   });
$( document ).ready(function() {
  $('.tabs__item').on('click', function(e) {
    e.preventDefault();
    console.log($(this).closest('div').next().find('.tabs__content-item'))
    $(this).closest('ul').find('.tabs__item').removeClass('tabs__item--active');
    $(this).closest('div').next().find('.tabs__content-item').removeClass('tabs__content-item--active');
    $(this).addClass('tabs__item--active');
    $($(this).attr("href")).addClass('tabs__content-item--active')
  })
  });
$( document ).ready(function() {
  $('.product__favorites').on('click',function(e){
    console.log(123)
  if (!$(this).hasClass('product__favorites--active') ) {
    $(this).addClass('product__favorites--active')
  }
  else {
    $(this).removeClass('product__favorites--active')
  }
  })
})

function changeView(view){
  if (view == 'line') {
    console.log('sw line')
    $('.product__item').addClass('product__item--line')
  }
  if (view == 'grid') {
    console.log('sw line')
    $('.product__item').removeClass('product__item--line')
  }
}
$( document ).ready(function() {
  $('.products-filter__content input').styler();
  $('.products-filter__option-item select').styler();


  $('.products-filter__drop-item-title').on('click', function(e) {
    $(this).toggleClass('products-filter__drop-item-title--active')
    $(this).next().slideToggle();
  })



  var $range = $(".js-range-slider"),
  $inputFrom = $(".js-input-from"),
  $inputTo = $(".js-input-to"),
  instance,
  min = 100000,
  max = 500000,
  from = 200000,
  to = 400000;


  $range.ionRangeSlider({
    skin: "round",
      type: "double",
      min: min,
      max: max,
      from: from,
      to: to,
      grid: false,
      force_edges: true,
      hide_min_max: true,
      hide_from_to: true,
      block: false,
      onStart: updateInputs,
      onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");


  function updateInputs (data) {
    from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
  }


  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });
});







})
$( document ).ready(function() {
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
$( document ).ready(function() {
  $('.catalog__sorting-select').styler();
  $('.catalog__view-btn').on('click', function(e) {
    if (!$(this).hasClass('catalog__view-btn--active')) {
      $('.catalog__view-btn--active').removeClass('catalog__view-btn--active')
      $(this).addClass('catalog__view-btn--active')
    }





  })
})
$(function () {

  $("#product-page__star-rate").rateYo({
    normalFill: "#C4C4C4",
    ratedFill: "#1C62CD",
    rating: "50%",
    starWidth: "23px"

  });

});
var menu = document.querySelector(".mobile-menu__list");
var menuBtn = document.querySelector(".humburger__btn");
console.log(menuBtn)





menuBtn.addEventListener('click', () => {
console.log('1')
  if (!menuBtn.classList.contains('is-active')) {
    menu.style.display = 'flex';
   // menu.style.transform = 'translateY(500px)';
    console.log(menuBtn.style.marginTop)
    menuBtn.classList.add('is-active');
    menu.classList.add('is-active');
  }

  else {
    menuBtn.classList.remove('is-active');
    menu.style.display = 'none';
  }
}, false);





// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 768) {
//       menuBtn.classList.remove("is-active");
//       menu.style.display = 'flex';
//   }
//   else {
//     menu.style.display = 'none';
//   }
// });
$(document).ready(function () {
  var product_suggestion_swiper = new Swiper('.product-suggestion__slider-container', {
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
      nextEl: '.product-suggestion__swiper-button-next',
      prevEl: '.product-suggestion__swiper-button-prev',
    },
  });
});


console.log('all block loaded')