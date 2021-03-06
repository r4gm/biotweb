$(function () {
  $('.cardInner').on('click', function() {
    $(this).toggleClass('isflipped');
    console.log('clicked');
  });
});
