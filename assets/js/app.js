$(document).ready(function() {

	///// INDEX AND ALL PAGES /////
	// Set Main Elements/Sections to display none
	$('.jumbotrons').css('display', 'none');
	$('.container1').css('display', 'none');

	// Grabs each .card class
	// Find first class .btn-info within
	// Find class .card-title within
	// Appends text from .card-title to .btn-info with "Learn about "
	$('.card').each(function() {
		$(this).find('.btn-info').first().text("Learn about " + $(this).find('.card-title').text())
	});

	// Fade In Elements 
	$('.jumbotrons').fadeIn(1500);
	$('.container1').fadeIn(2500);

	///// TESLA PAGE /////
	// Grabs div with class of carousel-inner from parent div attr data-ride
	// Adds css border-radius style not written previously in css folder 
	$("[data-ride='carousel'] .carousel-inner").css("border-radius", "6px");

	///// SOLAR CITY /////
	// Click event on button with class of solarBtn
	$('.solarBtn').click(function() {
		// Grabs the P element placed after the class display-4
		// Animate method attached, increasing font size over 1s
		$(".display-4+p").animate({fontSize: "20px"}, 1000);
	});

	///// SPACEX PAGE /////
	// Grab both buttons and add margin-top of 20px
	$(".spaceBtn, .textSwitch").css("margin-top", "20px");
	$("iframe").css("border-radius", "6px");

	// Button click
	$('.spaceBtn').click(function() {
		// Attach slideUp method to heading with class display-4
		$(".display-4").slideUp();
	});
	// Button click
	$('.textSwitch').click(function() {
		// Assign variables to html content
		var one = $(".colOne p");
		var two = $(".colTwo p");
		// Hide HTML/var and fadeIn in new div
		$(".colTwo").hide().fadeIn(1500).html(one);
		$(".colOne").hide().fadeIn(1500).html(two);
	});

	///// BORING COMPANY /////
	// Add margin to the boringBtn
	$(".boringBtn").css("margin", "20px 0px 20px 0px");

	// Button click method
	$(".boringBtn").click(function(event) {
		// Prevent default event submit
		event.preventDefault();
		// Set values from inputs to variables
		var inputOne = $("#formOne").val();
		var inputTwo = $("#formTwo").val();
		// Grab table element and append variable data and create new tr and td
		$("table").append("<tr>" + "<td role='cell'>" + inputOne + "</td>" + "<td>" + inputTwo + "</td" + "</tr>");
		// Assign inputs back to empty
		$("#formOne").val("");
		$("#formTwo").val("");
	});

	// Grab class .table
	// Finds first instance of tr and add attribute role="row"
	$(".table").each(function() {
		$(this).find("tr:first").attr("role", "row");
	});

	//Grabs class .table
	// Find each tr, find first td within tr and add attribute role="cell"
	$(".table").each(function() {
		$(this).find("tr").find("td:first").attr("role", "cell");
	})




});
