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
