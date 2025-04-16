import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
let lightbox = null;

export function createGallery(images) {
  const markup = images.map(image => {
    return `
      <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-item-link">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" class="gallery-image" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${image.likes}</p>
          <p><b>Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </li>
    `;
  }).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  // Створення/оновлення lightbox
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader')?.classList.add('is-visible');
}

export function hideLoader() {
  document.querySelector('.loader')?.classList.remove('is-visible');
}
