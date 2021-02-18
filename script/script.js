$(function() {
  $('.slider').each(function() {
    var $slds = $(this).find('> div'),
        slideCount = $slds.length,
        currentIndex = 0;

    $slds.eq(currentIndex).fadeIn();
    var $interval = setInterval(showSlides, 6000);

    function showSlides() {
      var nextIndex =  (currentIndex + 1) % slideCount;
      $slds.eq(currentIndex).fadeOut(4000);
      $slds.eq(nextIndex).fadeIn(2000);
      currentIndex = nextIndex;
    }

    $('.cLeft').on('click', function() {
      var nextIndex =  (currentIndex - 1) % slideCount;
      $slds.eq(currentIndex).fadeOut(800);
      $slds.eq(nextIndex).fadeIn(500);
      currentIndex = nextIndex;
      clearInterval($interval);
      $interval = setInterval(showSlides, 6000);
      console.log("left");
    });

    $('.cRight').on('click', function() {
      var nextIndex =  (currentIndex + 1) % slideCount;
      $slds.eq(currentIndex).fadeOut(800);
      $slds.eq(nextIndex).fadeIn(500);
      currentIndex = nextIndex;
      clearInterval($interval);
      $interval = setInterval(showSlides, 6000);
      console.log("right");
    });
  });


});
