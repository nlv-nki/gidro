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
