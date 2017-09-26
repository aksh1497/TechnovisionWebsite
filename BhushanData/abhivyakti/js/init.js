(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.modal').modal();
	$('.scrollspy').scrollSpy();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.carousel').carousel();
	  setInterval(function() {
		$('.carousel').carousel('next');
	  }, 5000); 

  }); // end of document ready
})(jQuery); // end of jQuery name space