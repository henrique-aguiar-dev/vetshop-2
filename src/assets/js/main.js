import { initMenuMobile } from '../../modules/menu-scroll.js';
import { galleryModal } from '../../modules/modal.js';

const onLoad = () => {

	//SlideDown menu mobile - close on scroll
	//Flags
	let scrolled = false;
	let menuMinimized = false;

	const sizeMenu = size => {
		const menuParent = document.querySelector('header');
		const menuMob = document.querySelector('.menu-mobile');
		let menuMobHeight;

		menuParent.className = `height-${size}`;
		size === 1 ? menuMobHeight = 100 + 'px' : menuMobHeight = 70 + 'px';
		menuMob.style.top = menuMobHeight;
		size === 2 ? menuMinimized = true : menuMinimized = false;
	}

	const checkMenuSize = () => {
		if (window.pageYOffset > 100) {
			scrolled = true;
			!menuMinimized ? sizeMenu(2) : false;
		} else {
			scrolled = false;
			menuMinimized ? sizeMenu(1) : false;
		}
	}

	window.addEventListener('scroll', () => checkMenuSize());

	//On load functions
	initMenuMobile();
	galleryModal();
	checkMenuSize();
}

onLoad();