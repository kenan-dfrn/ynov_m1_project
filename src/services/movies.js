import axios from "axios";

const service = {
  getPopularMovies: async (params) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5545b123bb0d696c917f4b88dd656165&page=${params.page +1}`
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
  getMoviesByGenre: async (params) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${params.genre}&api_key=5545b123bb0d696c917f4b88dd656165&page=${params.page +1}`
    );
    return result.data;
  },
};

export default service;
