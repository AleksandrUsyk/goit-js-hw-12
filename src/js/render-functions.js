import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
  <div class="info-item">
    <p class="label">Likes</p>
    <p class="value">${likes}</p>
  </div>
  <div class="info-item">
    <p class="label">Views</p>
    <p class="value">${views}</p>
  </div>
  <div class="info-item">
    <p class="label">Comments</p>
    <p class="value">${comments}</p>
  </div>
  <div class="info-item">
    <p class="label">Downloads</p>
    <p class="value">${downloads}</p>
  </div>
</div>

      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('is-hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('is-hidden');
}
