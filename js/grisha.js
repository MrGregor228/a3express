const menuToggler = document.querySelector('.openMenu'),
	menu = document.querySelector('.navigation-menu'),
	menuCloser = document.querySelector('.close'),
	navigationMenuLink = document.querySelectorAll('.navigation-menu__link');

const menuHeight = () => {
	if (menu.classList.contains('opened')) {
		menu.style.height = `${navigationMenuLink[0].clientHeight * navigationMenuLink.length}px`;
	} else {
		menu.style.height = 0;
	}
};

menuToggler.addEventListener('click', () => {
	// menu.classList.add('opened');
	// menu.classList.remove('closed');
	

	menu.classList.toggle('opened');
	menuHeight();
});

// menuCloser.addEventListener('click', () => {
// 	menu.classList.add('closed');
// 	setTimeout(() => {
// 		menu.classList.remove('opened');
// 	}, 500);
// });

navigationMenuLink.forEach(item => {
	item.addEventListener('click', () => {
		// menu.classList.add('closed');
		// setTimeout(() => {
		// 	menu.classList.remove('opened');
		// }, 500);
		menu.classList.remove('opened');
		menuHeight();
	});
});

// smooth transfer
$("li.navigation-menu__link a").click(function (e) {
	e.preventDefault();
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top - 250;
	$("body,html").animate({
		scrollTop: destination
	}, 350);
});
$(".navigation__brand a").click(function (e) {
	e.preventDefault();
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top - 100;
	$("body,html").animate({
		scrollTop: destination
	}, 350);
});

window.addEventListener('resize', () => {
	if (document.body.clientWidth < 992) {
		console.log('Body width < 992px');
	} else {
		menu.style.height = 'auto';
	}
});

window.addEventListener('DOMContentLoaded', () =>{
	const rightSliderButton = document.querySelector('.falseNavigationRight'),
		  leftSliderButton = document.querySelector('.falseNavigationLeft'),
		  owlStage = document.querySelector('.owl-stage-outer');

	rightSliderButton.style.top = `${(owlStage.clientHeight / 2) - (rightSliderButton.clientHeight / 2)}px`;
	leftSliderButton.style.top = `${(owlStage.clientHeight / 2) - (leftSliderButton.clientHeight / 2)}px`;

	rightSliderButton.style.right = `${owlStage.clientWidth - owlStage.clientWidth}px`;
	leftSliderButton.style.left = `${owlStage.clientWidth - owlStage.clientWidth}px`;

});

AOS.init();