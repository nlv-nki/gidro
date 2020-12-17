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
