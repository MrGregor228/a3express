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

navigationMenuLink.forEach(item => {
	item.addEventListener('click', () => {
		// menu.classList.add('closed');
		// setTimeout(() => {
		// 	menu.classList.remove('opened');
		// }, 500);
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
// 	destination = $(elementClick).offset().top - 150;
// 	$("body,html").animate({
// 		scrollTop: destination
// 	}, 350);
// });
// $(".navigation__brand a").click(function (e) {
// 	e.preventDefault();
// 	elementClick = $(this).attr("href");
// 	destination = $(elementClick).offset().top - 150;
// 	$("body,html").animate({
// 		scrollTop: destination
// 	}, 350);
// });


// $(document).ready(function(){
//   // Add smooth scrolling to all links
  
// });
$("li.navigation-menu__link a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 150
      }, 800);
    }
  });

  $(".navigation__brand a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 150
      }, 800);
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