import {
  handleApiKeyError,
  showError,
  setGif,
  handleGifNotFound,
  clearError,
  clearInputValue,
} from './functions';
import defaultImg from '../images/default.gif';

const URI =
  'https://api.giphy.com/v1/gifs/random?api_key=rVwOiFFX3oZk5jfqXjux1KP3HHyTbcZH';
const spanError = document.querySelector('.error');
const img = document.querySelector('.result');
img.src = defaultImg;

export const getRandomGif = async () => {
  try {
    const response = await fetch(URI, { mode: 'cors' });
    handleApiKeyError(response);
    clearError(spanError);
    const gifData = await response.json();
    setGif(img, gifData);
  } catch (error) {
    img.src = defaultImg;
    showError(spanError, error);
  }
};

export const searchGif = async () => {
  try {
    const searchInput = document.querySelector('#search');
    const searchInputValue = searchInput.value;
    const URI_SEARCH = `${URI.replace(
      'random',
      'translate'
    )}&s=${searchInputValue}`;

    const response = await fetch(URI_SEARCH, { mode: 'cors' });
    handleApiKeyError(response);
    clearError(spanError);
    const gifData = await response.json();
    handleGifNotFound(gifData);
    setGif(img, gifData);
    clearError(spanError);
    clearInputValue();
  } catch (error) {
    img.src = defaultImg;
    showError(spanError, error);
    clearInputValue();
  }
};
