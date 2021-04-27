import { show, hide } from './custom-lib.js';

//---- Gallery zoom - modal - close on touch screen----

export const galleryModal = () => {
	const html = document.querySelector('html');
	const galleryModal = document.querySelector('.galeria-modal');
	const gallerySingle = document.querySelectorAll('.galeria-single img');
	const closeModal = document.querySelector('.galeria-modal span');
	const imgZoom = document.querySelector('.img-zoom');
	let openedImg;

	const zoomClicked = clickedImg => {
		clickedImg.style.borderColor = 'rgb(22, 51, 114)';
		show(galleryModal);
		closeModal.style.visibility = 'visible';
		setTimeout(() => imgZoom.style.visibility = 'visible', 300);
		//setTimeout(() => html.style.overflow = 'hidden', 500);
		html.style.overflow = 'hidden'
		return clickedImg;
	}

	const closeOpenedImg = openedImg => {
		openedImg.style.borderColor = 'rgba(0, 0, 0, 0)';
		galleryModal.animate([{ width: 100 + '%', height: 100 + '%' }, { width: 0, height: 0 }], 300);
		closeModal.style.visibility = 'hidden';
		setTimeout(() => hide(galleryModal), 300);
		imgZoom.style.visibility = 'hidden';
		html.style.overflow = 'initial';
	}

	gallerySingle.forEach(thisImg => {
		thisImg.addEventListener('click', e => openedImg = zoomClicked(e.target));
	})

	closeModal.addEventListener('click', () => closeOpenedImg(openedImg));

}
