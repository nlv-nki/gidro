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
$(document).ready(function () {
  $('.products-filter__content input').styler();
  $('.products-filter__option-item select').styler();


  $('.products-filter__drop-item-title').on('click', function (e) {
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


  function updateInputs(data) {
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





  // $('input').change(function () {
  //   var selector = $('input:checkbox').map(function () {
  //     return this.checked ? '.' + this.id : '';
  //   }).get().join('');
  //   var all = $('div[class^="category"]');
  //   if (selector.length)
  //     all.hide().filter(selector).show()
  //   else all.hide();
  // });


  // $('input').change(function () {

  //   var selector = $('input:checkbox').map(function () {
  //     return this.checked ? '.' + this.id : '';
  //   }).get().join('');
  //   console.log(selector);
  // });



  // // let product = event.target.closest(".product__item");
  // let productTitle = product.querySelector(".product__title a").innerText;
  // let productPrice = product.querySelector(".product__price-current")
  //   .innerText;
  // let productId = `productId-${product.dataset.productId}`;

})

// let products = document.querySelectorAll('.product__item');
// let formFilters = document.querySelector('.products-filter__form');

// let acc = Object.fromEntries(
//   Array.from(products).map((product, index) => {
//     return [`productId-${product.dataset.productId}`,
//       {
//         productTitle: product.querySelector(".product__title a").innerText,
//         productPrice: product.querySelector(".product__price-current").innerText,
//       }
//     ]
//   })
// )





// formFilters.addEventListener('click', function (event) {

//   Object.entries(acc).forEach((product, index, acc) => {


//     console.dir(product);
//     if (event.target.closest('.products-filter__submit-btn')) {
//       console.log('form activited');
//       acc.forEach(item => {
//         console.log(item[1].productTitle, 666)
//         console.log(formFilters.freeSearchByModel.value, 777)

//         if (item[1].productTitle.includes(formFilters.freeSearchByModel.value)) {
//           console.log( products.dataset.productId);


//         }
//       })

//     }

//   })
// })


let products = document.querySelectorAll('.product__item');
let formFilters = document.querySelector('.products-filter__form');




function productsCollection2() {
  let arr = Array.from(products).map((product, index, element) => {
    let productAvalible = true;
    if (product.querySelector('.product__not-available').classList.contains('product__not-available--active')) {
      productAvalible = false;
    }
    return [`productId-${product.dataset.productId}`,
      {
        'productTitle': product.querySelector(".product__title a").innerText,
        'productPrice': product.querySelector(".product__price-current").innerText,
        'productAvalible': productAvalible,
        'productId': `productId-${product.dataset.productId}`,
        'product': element[index]
      }
    ]
  })
  return arr
}




function productsCollection() {

  let obj = Object.fromEntries(
    Array.from(products).map((product, index, element) => {
      let productAvalible = true;
      if (product.querySelector('.product__not-available').classList.contains('product__not-available--active')) {
        productAvalible = false;
      }
      return [`productId-${product.dataset.productId}`,
        {
          'productTitle': product.querySelector(".product__title a").innerText,
          'productPrice': product.querySelector(".product__price-current").innerText,
          'productAvalible': productAvalible,
          'productId': `productId-${product.dataset.productId}`,
          'element': element[index]
        }
      ]
    })
  )
  return obj;
}

let productsList = productsCollection();

console.log(productsCollection());

if (formFilters) {

  formFilters.addEventListener('click', function (event) {

    if (event.target.closest('.products-filter__submit-btn')) {
      console.log('form activited');

      let checked = Array.from(formFilters).filter(input => {
        if (input.type == "checkbox" && input.checked == true) {
          return input
        }
      })
      console.log(checked);

      checked.forEach(input => {


      })



      checked.forEach(input => {
        Object.keys(productsList).forEach(function (product) {
          //productsList[product].element.hidden = true


          //   productsList[product].element.style.border = '1px solid';
          //      console.log(productsList[product].element, 9559);

          //   console.log(input.name, productsList[product], 555);
          if (!productsList[product][input.name] && !productsList[product][input.name]) {
            productsList[product].element.hidden = true;

            //productsList[product].element.style.border = '1px solid';
            productsList[product].element.style.display = 'none';
            console.log(input.name, productsList[product], 666);
          }
        })
      })


      // Object.keys(productsList).forEach(function (product) {
      //   console.log(product, productsList[product], 555);

      // })
      // else if перебивает блок инлайном display block
      products.forEach(product => {
        let productTitle = product.querySelector(".product__title a").innerText;
        console.log(productTitle);
        if (!productTitle.includes(formFilters.freeSearchByModel.value)) {
          product.style.display = "none";
        }
        //  else if (formFilters.freeSearchByModel.value === "") {
        //   product.style.display = 'block';
        // }
      })



    }

  })
}






function checkSettings() {

}


function search(options) {

  products.forEach(product => {
    let productTitle = product.querySelector(".product__title a").innerText;
    console.log(productTitle);
    if (!productTitle.includes(formFilters.freeSearchByModel.value)) {
      product.style.display = "none";
    } else if (formFilters.freeSearchByModel.value === "") {
      product.style.display = 'block';
    }
  })

}
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
class Cart {
  constructor({
    elem
  }) {
    this.elem = elem;
    console.log("new Cart loaded");
    this.bucket = {};
    this._onClick();
    this.render();
  }

  _onClick() {
    document.addEventListener("click", (event) => {
      if (event.target.closest(".product__btn")) {
        let product = event.target.closest(".product__item");
        let productTitle = product.querySelector(".product__title a").innerText;
        let productPrice = product.querySelector(".product__price-current")
          .innerText;
        let productId = `productId-${product.dataset.productId}`;
        this.addItem(productId, productTitle, productPrice);
      }
    });
  }

  _createItem(id, item, price) {
    let quantity = 1;
    return (id = {
      id: id,
      name: item,
      cost: price,
      quantity: quantity,
    });
  }

  _getBasket() {
    let basket = JSON.parse(localStorage.getItem("cart"));
    return basket
  }

  _getItem(item) {
    let json = JSON.parse(localStorage.getItem("cart"));
    return json[item];
  }


  addItem(id, item, price) {
    this.basket = localStorage.getItem("cart") ?
      (this.basket = JSON.parse(localStorage.getItem("cart"))) :
      (this.basket = {});

    if (!this.basket[id]) {
      this.basket[id] = this._createItem(id, item, price);



    } else {

      this.basket[id].quantity++;

    }
    localStorage.setItem("cart", JSON.stringify(this.basket));
    this.render();

  }

  removeItem(id) {

    let basket = this._getBasket()
    console.log(basket);
    console.log(id);
    console.log(basket[id], 666);
    if (basket[id].quantity > 1) {
      basket[id].quantity--
      console.log('quan ' + basket[id].quantity);
      this.render()
    } else {
      delete basket[id];
    }
    console.log(basket);
    console.log(Object.keys(basket).length, 777);

    localStorage.setItem("cart", JSON.stringify(basket));
    this.render()
  }

  render() {
    let miniCart = document.querySelector(".basket");
    let quantityCounter = document.querySelector(".basket__num");
    let basket = this._getBasket();
    let sumCounter = 0;
    let miniCartWindow = document.querySelector(".mini-cart");
    miniCart.append(miniCartWindow)
    miniCartWindow.innerHTML = ``;
    if (basket) {
      Object.keys(basket).forEach((item) => {
        sumCounter += basket[item].quantity;
        if (sumCounter) {
          quantityCounter.style.display = "inline-block";
          quantityCounter.innerText = sumCounter;
        }

        miniCartWindow.innerHTML += `
        <div class="mini-cart__item">
            <div><span class="mini-cart__price">Модель: ${basket[item].name}</span></div>
            <div>Артикул:<span class="mini-cart__id">${basket[item].id}</span></div>
            <div><span class="mini-cart__price">Цена:  ${basket[item].cost}</span></div>
            <div class="mini-cart__summary"><span class="mini-cart__quantity">Количество: ${basket[item].quantity}</span><span class="mini-cart__remove-item">Удалить</span></div>
          </div>
        `
      });
    }

    if (sumCounter === 0) {
      quantityCounter.style.display = "none";
    }


  }
}

let cart = new Cart({
  //elem: document.querySelector(".catalog__products-list"),
  elem: document.querySelector(".product__item"),
});
let basket = document.querySelector('.basket')
let trigger = false;
let timer;
miniCart = document.querySelector('.mini-cart')

miniCart.addEventListener('mouseover', event => trigger = true)
miniCart.addEventListener('mouseout', event => hide())
basket.addEventListener('mouseover', event => show())
basket.addEventListener('mouseout', (event) => {

  if (!trigger) {
    timer = setTimeout((event) => {
      miniCart.style.display = 'none'
      miniCart.classList.remove('is-active')
    }, 5000)
    console.log('basket timer on');
  }
})

function show() {
  miniCart.style.display = 'block'
  miniCart.classList.add('is-active')
  clearTimeout(timer)
}

function hide() {
  miniCart.style.display = 'none'
  miniCart.classList.remove('is-active')
}
class MiniCart {
  constructor({
    elem
  }) {
    this._elem = elem;
    this._subscribe()
  }

  _subscribe() {
    this._elem.addEventListener('click', function (event) {
      if (event.target.closest(".mini-cart__remove-item")) {
        console.log(event.target.closest('.mini-cart__item').querySelector('.mini-cart__id').innerHTML);
        let id = event.target.closest('.mini-cart__item').querySelector('.mini-cart__id').innerHTML;

        cart.removeItem(id)

      }
    })
  }

}

new MiniCart({
  elem: document.querySelector('.mini-cart')
})
console.log('all block loaded')