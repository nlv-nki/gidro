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
