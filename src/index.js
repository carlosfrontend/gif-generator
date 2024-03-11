import './styles/main.css';
import magnifyIconSrc from './images/magnify.svg';
import attrImageSrc from './images/PoweredBy_200px-White_HorizLogo.png';
import { getRandomGif, searchGif } from './modules/handlers';

const magnify = document.querySelector('#magnify-icon');
const attrImage = document.querySelector('.attr-image');
const searchButton = document.querySelector('#search-button');
const getGifBtn = document.querySelector('.get-gif-button');

magnify.src = magnifyIconSrc;
attrImage.src = attrImageSrc;

getGifBtn.addEventListener('click', getRandomGif);
searchButton.addEventListener('click', searchGif);
