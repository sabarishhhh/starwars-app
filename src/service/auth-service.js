import axios from "axios";

const API_URL = "https://swapi.dev/api/";

//sevice for getting character details
const getCharacters = async (url) => {
  try {
    const response = await axios.get(url ? url : API_URL + "people");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//service for getting the movie titles
const fetchMovieNames = async (urls) => {
  try {
    const responses = await axios.all(urls.map((url) => axios.get(url)));
    const movieNames = responses.map((response) => response.data.title);
    return movieNames;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const authService = {
  getCharacters,
  fetchMovieNames,
};
export default authService;
