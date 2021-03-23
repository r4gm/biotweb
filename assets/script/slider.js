var counter = 2;

setInterval(function() {
  document.getElementById('slide' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 6500);

// $(function() {
//   var $slider = $('.slides');
//
//   showSlides();
//
//   function showSlides() {
//     var interval = setInterval(function() {
//       goToSlide()
//     }, 4000);
//   }
//
//   function goToSlide() {
//     $slider.stop(true).animate({left: '-100%'}, 800, "swing", function() {
//       $slider.css({left: '0'});
//       $slider.append($slider.find('> div').eq(0));
//     });
//   }
// });
