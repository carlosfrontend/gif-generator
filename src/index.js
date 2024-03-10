import './styles/main.css';

import magnifyIconSrc from './images/magnify.svg';
import attrImageSrc from './images/PoweredBy_200px-White_HorizLogo.png';
import defaultImg from './images/default.gif';

const magnify = document.querySelector('#magnify-icon');
const attrImage = document.querySelector('.attr-image');
const searchButton = document.querySelector('#search-button');
const URI =
  'https://api.giphy.com/v1/gifs/random?api_key=rVwOiFFX3oZk5jfqXjux1KP3HHyTbcZH';

const img = document.querySelector('.result');
const getGifBtn = document.querySelector('.get-gif-button');
const spanError = document.querySelector('.error');

magnify.src = magnifyIconSrc;
attrImage.src = attrImageSrc;
img.src = defaultImg;

const getRandomGif = () => {
  fetch(URI, { mode: 'cors' })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          'Could not obtain a new image. A correct API key is required!!'
        );
      }
      spanError.textContent = '';
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      spanError.textContent = error;
    });
};

const searchGif = (event) => {
  const myEvent = event;
  const searchInput = document.querySelector('#search');
  const searchInputValue = searchInput.value;
  const URI_SEARCH = `${URI.replace(
    'random',
    'translate'
  )}&s=${searchInputValue}`;
  fetch(URI_SEARCH, { mode: 'cors' })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          'Could not obtain a new image. A correct API key is required!!'
        );
      }
      spanError.textContent = '';
      return response.json();
    })
    .then((response) => {
      if (response.data.length === 0 && response.meta.status === 200) {
        throw new Error(
          'Try writing something different. We did not find images with that term!!'
        );
      }
      img.src = response.data.images.original.url;
      spanError.textContent = '';
      myEvent.target.parentElement.parentElement.children[0].value = '';
    })
    .catch((error) => {
      spanError.textContent = error;
      myEvent.target.parentElement.parentElement.children[0].value = '';
    });
};

getGifBtn.addEventListener('click', getRandomGif);
searchButton.addEventListener('click', searchGif);
