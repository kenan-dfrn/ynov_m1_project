import axios from "axios";

const service = {
  getPopularMovies: async (filters) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5545b123bb0d696c917f4b88dd656165`
    );
    return result.data;
  },
  getMovie: async (id) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5545b123bb0d696c917f4b88dd656165`
    );
    return result.data;
  },
  getRecommendations: async (id) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5545b123bb0d696c917f4b88dd656165`
    );
    return result.data;
  },
  getSimilarMovies: async (id) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=5545b123bb0d696c917f4b88dd656165`
    );
    return result.data;
  },
  getCreditMovie: async (id) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5545b123bb0d696c917f4b88dd656165`
    );
    return result.data;
  },
  getMoviesByGenre: async (genreId) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=5545b123bb0d696c917f4b88dd656165`
    );
    return result.data;
  },
};

export default service;
