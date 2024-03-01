// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  messageColor: 'white',
  messageSize: '16',
  messageLineHeight: '24',
  maxWidth: 432,
  theme: 'dark',
  position: 'topRight',
  iconUrl: './img/x-octagon.svg',
});

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import getGallerySearch from './js/pixabay-api';
import galleryAdd from './js/render-functions';
import { galleryLoader } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-list');
let searchImageName = '';

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  searchImageName = searchForm.elements.search.value.trim();

  if (searchImageName) {
    galleryLoader();
    getGallerySearch(searchImageName).then(array => {
      if (array.length === 0) {
        gallery.innerHTML = '';
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          backgroundColor: '#EF4040',
        });
      } else {
        galleryAdd(array);
        const instanceGallery = new SimpleLightbox('.gallery-list a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        instanceGallery.refresh();
      }
    });
    searchForm.reset();
  } else {
    gallery.innerHTML = '';
  }
});
