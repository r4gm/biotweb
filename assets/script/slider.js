var counter = 2;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 6000);











// $(function() {
//   var $slider = $('.slides');
//
//   showSlides();
//
//   function showSlides() {
//     var interval = setInterval(function() {
//       goToSlide()
//     }, 6500);
//   }
//
//   function goToSlide() {
//     $slider.stop(true).animate({left: '-100%'}, 800, "swing", function() {
//       $slider.css({left: '0'});
//       $slider.append($slider.find('> div').eq(0));
//     });
//   }
// });





// var counter = 2;
// var controls = document.getElementById('controls');
// var rad = document.getElementById('bullets');
//
// setInterval(function() {
//   document.getElementById('slide' + counter).checked = true;
//   counter++;
//   if (counter > 4) {
//     counter = 1;
//   }
// }, 6500);
//
// controls.onclick = function() {
//   setTimeout(() => {
//     counter = $("input[name='slider']:checked").val();
//     console.log("counter " + counter);
//   }, 2000);
//
// }
//
// rad.onclick = function() {
//   setTimeout(() => {
//     counter = $("input[name='slider']:checked").val();
//     console.log("counter " + counter);
//   }, 2000);
// }
//
// // $(function() {
// //   var $slider = $('.slides');
// //
// //   showSlides();
// //
// //   function showSlides() {
// //     var interval = setInterval(function() {
// //       goToSlide()
// //     }, 4000);
// //   }
// //
// //   function goToSlide() {
// //     $slider.stop(true).animate({left: '-100%'}, 800, "swing", function() {
// //       $slider.css({left: '0'});
// //       $slider.append($slider.find('> div').eq(0));
// //     });
// //   }
// // });
