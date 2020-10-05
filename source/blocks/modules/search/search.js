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
