import axios from 'axios';
import Constants from './Constants'

const movies = type => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/now_playing?api_key=${Constants.API_KEY}`
  );
};

export default { movies };