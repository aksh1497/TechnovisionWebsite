(function($){
  $(function(){

    $('.button-collapse').sideNav({
      menuWidth: 260, // Default is 300
	  closeOnClick: true,
    });
    $('.modal').modal();
	$('.scrollspy').scrollSpy();
	
  }); // end of document ready
})(jQuery); // end of jQuery name space