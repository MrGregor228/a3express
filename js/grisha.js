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
const section = document.querySelectorAll('section');

menuToggler.addEventListener('click', () => {	
	if (menu.classList.contains('opened')) {
		menu.classList.remove('opened');
	} else {
		menu.classList.add('opened');
	}
	menuHeight();
});

section.forEach((item, e) => {
	item.addEventListener('click', () => {		
		let target = e.target;		
		if (document.body.clientWidth <= 992) {
			menu.classList.remove('opened');
			menuHeight();
		} else {
			menu.style.height = 'auto';
		}		
	});
});

navigationMenuLink.forEach((item, i) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		if (menu.classList.contains('opened')) {
			menu.classList.remove('opened');
			menuHeight();
		} else {
			return false;
		}
	});
});

$(".navigation__brand a").click(function (e) {
	e.preventDefault();
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top - 100;

	$("body,html").animate({
		scrollTop: destination
	}, 350);
});

$('li.navigation-menu__link a')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top - 75
				}, 500);
			}
		}
	});

window.addEventListener('resize', () => {
	if (document.body.clientWidth < 992) {
		console.log('Body width < 992px');
	} else {
		menu.style.height = 'auto';
	}
});

window.addEventListener('DOMContentLoaded', () => {
	const rightSliderButton = document.querySelector('.falseNavigationRight'),
		owlStageOuter = document.querySelector('.owl-stage-outer'),
		controls = document.querySelector('.controls');

	controls.style.top = `${(owlStageOuter.clientHeight / 2.25) - (rightSliderButton.clientHeight / 2.25)}px`;
	window.addEventListener('resize', () => {
		controls.style.top = `${(owlStageOuter.clientHeight / 2.25) - (rightSliderButton.clientHeight / 2.25)}px`;
	});
});

AOS.init();