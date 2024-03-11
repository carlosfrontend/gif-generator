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

export const getRandomGif = () => {
  fetch(URI, { mode: 'cors' })
    .then((response) => {
      handleApiKeyError(response);
      clearError(spanError);
      return response.json();
    })
    .then((response) => {
      setGif(img, response);
    })
    .catch((error) => {
      showError(spanError, error);
    });
};

export const searchGif = (event) => {
  const myEvent = event;
  const searchInput = document.querySelector('#search');
  const searchInputValue = searchInput.value;
  const URI_SEARCH = `${URI.replace(
    'random',
    'translate'
  )}&s=${searchInputValue}`;
  fetch(URI_SEARCH, { mode: 'cors' })
    .then((response) => {
      handleApiKeyError(response);
      clearError(spanError);
      return response.json();
    })
    .then((response) => {
      handleGifNotFound(response);
      setGif(img, response);
      clearError(spanError);
      clearInputValue(myEvent);
    })
    .catch((error) => {
      showError(spanError, error);
      clearInputValue(myEvent);
    });
};
