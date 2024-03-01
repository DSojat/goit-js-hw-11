const gallery = document.querySelector('.gallery-list');

export function galleryLoader() {
  gallery.innerHTML = '<span class="loader"></span>';
}

export default function galleryAdd(array) {
  const markup = array
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
    <li class="gallery-item">
      <div class="gallery-image-box">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
      </div>
      <div class="gallery-stats">
        <ul>
          Likes
          <li>${likes}</li>
        </ul>
        <ul>
          Views
          <li>${views}</li>
        </ul>
        <ul>
          Comments
          <li>${comments}</li>
        </ul>
        <ul>
          Downloads
          <li>${downloads}</li>
        </ul>
      </div>
    </li>
        `
    )
    .join('');
  gallery.innerHTML = markup;
}
