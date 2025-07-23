import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalPages = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const input = e.currentTarget.elements['search-text'];
  currentQuery = input.value.trim();

  if (!currentQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  currentPage = 1;
  totalPages = 0;
  hideLoadMoreButton();
  await loadImages();
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  await loadImages();
});

async function loadImages() {
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0 && currentPage === 1) {
      iziToast.info({
        title: 'Info',
        message: 'No images found. Please try a different query.',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    totalPages = Math.ceil(data.totalHits / 15);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    if (currentPage > 1) {
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
