$('.carousel-slider').carousel({fullWidth: true, padding:0},setTimeout(autoplay, 4500));
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 7500);
}

(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


