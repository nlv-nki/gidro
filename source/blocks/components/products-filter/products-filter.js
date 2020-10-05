$( document ).ready(function() {
  $('.products-filter__content input').styler();
  $('.products-filter__option-item select').styler();


  $('.products-filter__drop-item-title').on('click', function(e) {
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


  function updateInputs (data) {
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







})
