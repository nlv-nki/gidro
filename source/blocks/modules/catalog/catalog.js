$( document ).ready(function() {
  $('.catalog__sorting-select').styler();
  $('.catalog__view-btn').on('click', function(e) {
    if (!$(this).hasClass('catalog__view-btn--active')) {
      $('.catalog__view-btn--active').removeClass('catalog__view-btn--active')
      $(this).addClass('catalog__view-btn--active')
    }





  })
})


