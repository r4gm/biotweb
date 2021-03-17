$(function() {
  var counter = 1;
  var inter = setInterval(showSlides, 5000);

  function showSlides() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }

  $('.rad').on('click',function() {
    counter = $(this).val();
  });

  $('.cLeft').on('click',function() {
    counter--;
    if (counter <= 0) {
      counter = 4;
    }
    clearInterval(inter);
    document.getElementById('radio' + counter).checked = true;
    setTimeout(() => {  inter = setInterval(showSlides, 5000); }, 2000);

  });

  $('.cRight').on('click',function() {
    counter++;
    if (counter > 4) {
      counter = 1;
    }
    clearInterval(inter);
    document.getElementById('radio' + counter).checked = true;
    setTimeout(() => {  inter = setInterval(showSlides, 5000); }, 2000);
  });

});
