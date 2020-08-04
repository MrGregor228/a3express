const menuToggler = document.querySelector('.openMenu'),
	  menu = document.querySelector('.navigation-menu'),
	  menuCloser = document.querySelector('.close');

menuToggler.addEventListener('click', () => {
	menu.classList.add('opened');
	menu.classList.remove('closed');
});

menuCloser.addEventListener('click', () => {
	menu.classList.add('closed');
	setTimeout(() => {menu.classList.remove('opened');},500);
});