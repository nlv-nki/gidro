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
