const menuToggler = document.querySelector('.openMenu'),
	menu = document.querySelector('.navigation-menu'),
	menuCloser = document.querySelector('.close');

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

let image = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];

const divs = document.querySelectorAll('.bgi-div');

divs.forEach((item,i) => {
	item.style.backgroundImage = `url(${image[i]})`;
});
// console.log(owlItems);
// smooth transfer
$("li.navigation-menu__link a").click(function (e) {
	e.preventDefault();
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	$("body,html").animate({scrollTop: destination }, 800);
});
$(".navigation__brand a").click(function (e) {
	e.preventDefault();
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	$("body,html").animate({scrollTop: destination }, 800);
});

