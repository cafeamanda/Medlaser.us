$(document).ready(function(){

  var mCarouselTO = setTimeout(function() {
    $('#homeCarousel')
      .swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          $(this).carousel('next');
        },
        swipeRight:function() {
          $(this).carousel('prev');
        },
        threshold:45
      })
      .carousel({
        interval: 3000,
        cycle: true,
      })
      .trigger('slide');
  }, 2000);
  var q = mCarouselTO;

  $("body").click(function(event) {
    if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") && !$(event.target).hasClass('dropdown-toggle') ) {
      $('.navbar-collapse').collapse('toggle');
    }
  });
});
