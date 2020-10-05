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
