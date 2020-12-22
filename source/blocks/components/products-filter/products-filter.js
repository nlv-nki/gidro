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
    max = 4000000,
    from = 100000,
    to = 4000000;


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
    console.log(instance, 777);

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



class ProductFilter {
  constructor({
    filters,
    products
  }) {
    this.filters = filters;
    this.products = products;
    this._subscribe()

  }

  _subscribe() {
    this.filters.addEventListener('click', (event) => {
      if (event.target.closest('.products-filter__submit-btn')) {
        this.productsCollection();
        this.filter();
      }
    })
  }

  productsCollection() {

    let obj = Object.fromEntries(
      Array.from(this.products).map((product, index, element) => {

        let productOrder;
        let productAvalible = true;
        if (product.querySelector('.product__not-available').classList.contains('product__not-available--active')) {
          productAvalible = false;
          productOrder = true;
        }

        return [`productId-${product.dataset.productId}`,
          {
            'productTitle': product.querySelector(".product__title a").innerText,
            'productPrice': product.querySelector(".product__price-current").innerText,
            'productAvalible': productAvalible,
            'productOrder': productOrder,
            'productId': `productId-${product.dataset.productId}`,
            'element': element[index]
          }
        ]
      })
    )
    return obj;

  }

  filter() {
    let productsList = this.productsCollection();
    let checked = Array.from(this.filters).filter(input => {
      if (input.type == "checkbox" && input.checked == true) {
        return input
      }
    })

    let range = {
      min: +document.querySelector('.js-input-from').value,
      max: +document.querySelector('.js-input-to').value,
    }

    //search by checkboxes
    checked.forEach(input => {
      Object.keys(productsList).forEach(function (product) {
        if (!productsList[product][input.name] && !productsList[product][input.name]) {
          productsList[product].element.hidden = true;
          productsList[product].element.style.display = 'none';

        }
      })
    })

    //search by range
    Object.keys(productsList).forEach(function (product) {
      console.log(range.max, 999)
      let price = +productsList[product].productPrice.split(" ").join("").slice(0, -1)
      console.log(price, 'price ' + range.max + 'max')
      if (price < range.min || price > range.max) {
        productsList[product].element.style.display = 'none';
      }
    })


    //search by model name
    this.products.forEach(product => {
      let productTitle = product.querySelector(".product__title a").innerText;

      if (!productTitle.includes(this.filters.freeSearchByModel.value)) {
        product.style.display = "none";
      }
    })

  }
}

new ProductFilter({
  filters: document.querySelector('.products-filter__form'),
  products: document.querySelectorAll('.product__item')
})
