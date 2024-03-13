export const handleApiKeyError = (response) => {
  if (!response.ok) {
    throw new Error(
      'Could not obtain a new image. A correct API key is required!!'
    );
  }
};

export const showError = (span, error) => {
  const spanError = span;
  spanError.textContent = error;
};

export const setGif = (img, response) => {
  const imgTag = img;
  imgTag.src = response.data.images.original.url;
};

export const handleGifNotFound = (response) => {
  if (response.data.length === 0 && response.meta.status === 200) {
    throw new Error(
      'Try writing something different. We did not find images with that term!!'
    );
  }
};

export const clearError = (span) => {
  const spanError = span;
  spanError.textContent = '';
};

export const clearInputValue = () => {
  document.querySelector('#search').value = '';
};
