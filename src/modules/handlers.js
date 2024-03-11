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
    response.json().then((res) => {
      setGif(img, res);
    });
  } catch (error) {
    showError(spanError, error);
  }
};

export const searchGif = async (event) => {
  const myEvent = event;
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
    response.json().then((res) => {
      try {
        handleGifNotFound(res);
        setGif(img, res);
        clearError(spanError);
        clearInputValue(myEvent);
      } catch (error) {
        showError(spanError, error);
        clearInputValue(myEvent);
      }
    });
  } catch (error) {
    showError(spanError, error);
  }
};
