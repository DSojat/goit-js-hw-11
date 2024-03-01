export default function getGallerySearch(searchImageName) {
  const searchParams = new URLSearchParams({
    key: '42608378-1c88fd965c25ed4d8c49bb63d',
    q: searchImageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return Promise.resolve(
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.hits;
      })
      .catch(error => alert(error))
  );
}
