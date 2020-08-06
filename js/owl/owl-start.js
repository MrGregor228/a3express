$(document).ready(function () {

	var owl = $('.slider-1');
	owl.owlCarousel({
		loop: false,
		rewind: true,
		nav: true,
		pagination: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		items: 1,
		margin: 15,
		responsiveClass: true
	});
	$('.falseNavigationLeft').click(function () {
		owl.trigger('prev.owl.carousel', [300]);
	});
	// Go to the previous item
	$('.falseNavigationRight').click(function () {
		// Parameters has to be in square bracket '[]'
		owl.trigger('next.owl.carousel', [300]);
	});
});