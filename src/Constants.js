const API_KEY = '0402635087da938ce4b47a611db7c51f';
const REQUEST_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const FuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 3
};

export default { API_KEY, REQUEST_URL, IMAGE_URL, FuseOptions };