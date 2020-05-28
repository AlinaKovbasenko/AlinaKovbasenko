jQuery(function($) {'use strict';

	//Initiat WOW JS
	new WOW().init();
	
	$(window).load(function(){

		$('.main-slider').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader
	});


});