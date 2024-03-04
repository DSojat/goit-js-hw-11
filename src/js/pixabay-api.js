export default function getGallerySearch(searchImageName) {
  const searchParams = new URLSearchParams({
    key: '42608378-1c88fd965c25ed4d8c49bb63d',
    q: searchImageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => alert(error));
}
