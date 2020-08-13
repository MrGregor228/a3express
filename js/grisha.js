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

let arr = [
	document.getElementById('advantages'),
	document.getElementById('directions'),
	document.getElementById('slider'),
	document.getElementById('whyUs'),
	document.getElementById('privacy-policy')
];





menuToggler.addEventListener('click', () => {
	// menu.classList.add('opened');
	// menu.classList.remove('closed');


	menu.classList.toggle('opened');
	menuHeight();
});

const body = document.getElementsByTagName('body')[0];

body.addEventListener('touchend', () => {
	menu.classList.remove('opened');
	menuHeight();
});

// menuCloser.addEventListener('click', () => {
// 	menu.classList.add('closed');
// 	setTimeout(() => {
// 		menu.classList.remove('opened');
// 	}, 500);
// });

navigationMenuLink.forEach((item,i) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		// menu.classList.add('closed');
		// setTimeout(() => {
		// 	menu.classList.remove('opened');
		// }, 500);
		arr[i].scrollIntoView({behavior: "smooth"});
		if (menu.classList.contains('opened')) {
			menu.classList.remove('opened');
			menuHeight();
		} else {
			return false;
		}
	});
});

// smooth transfer
// $("li.navigation-menu__link a").click(function (e) {
// 	e.preventDefault();
// 	elementClick = $(this).attr("href");
// 	destination = $(elementClick).offset().top - 100;

// 	$("body,html").animate({
// 		scrollTop: destination
// 	}, 350);
// });
$(".navigation__brand a").click(function (e) {
	e.preventDefault();
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top - 100;

	$("body,html").animate({
		scrollTop: destination
	}, 350);
});

// Select all links with hashes
$('li.navigation-menu__link a')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
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