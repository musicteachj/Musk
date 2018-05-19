$(document).ready(function() {
	// Set Main Elements/Sections to display none
	$('.jumbotron').css('display', 'none');
	$('.container1').css('display', 'none');

	// Fade In Elements 
	$('.jumbotron').fadeIn(1000);
	$('.container1').fadeIn(2000);

	///// TESLA PAGE /////
	// Grabs div with class of carousel-inner from parent div attr data-ride
	// Adds css border-radius style not written previously in css folder 
	$("[data-ride='carousel'] .carousel-inner").css("border-radius", "6px");

	///// SOLAR CITY /////
	



});
