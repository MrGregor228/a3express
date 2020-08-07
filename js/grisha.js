const menuToggler = document.querySelector('.openMenu'),
	menu = document.querySelector('.navigation-menu'),
	menuCloser = document.querySelector('.close'),
	navigationMenuLink = document.querySelectorAll('.navigation-menu__link');

menuToggler.addEventListener('click', () => {
	menu.classList.add('opened');
	menu.classList.remove('closed');
});

menuCloser.addEventListener('click', () => {
	menu.classList.add('closed');
	setTimeout(() => {
		menu.classList.remove('opened');
	}, 500);
});

navigationMenuLink.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.add('closed');
		setTimeout(() => {
			menu.classList.remove('opened');
		}, 500);
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