$(document).ready(function() {

	$('.header_burger').click(function(event) {
		$('.header_burger, .menu').toggleClass('active');
		$('.body').toggleClass('lock');

	});

	$('.menu_items_links').click(function(event) {
		$('.header_burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});
});
