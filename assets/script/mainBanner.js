$(function() {
  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);

  $('.rad').on('click',function() {
    counter = $(this).val();
  });

  $('.cLeft').on('click',function() {
    counter--;
    if (counter < 0) {
      counter = 4;
    }
    console.log(counter + "cLeft clicked");
  });

  $('.cRight').on('click',function() {
    counter++;
    if (counter > 4) {
      counter = 1;
    }
    console.log(counter + "cRight clicked");
  });
});
