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

AOS.init();