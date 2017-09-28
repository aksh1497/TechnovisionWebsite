(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.modal').modal();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.carousel').carousel();
	  setInterval(function() {
		$('.carousel').carousel('next');
	  }, 3500); 

  }); // end of document ready
})(jQuery); // end of jQuery name space