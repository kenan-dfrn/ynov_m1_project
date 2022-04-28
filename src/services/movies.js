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
      `https://api.themoviedb.org/3/discover/movie?with_genres=${params.genres}&api_key=5545b123bb0d696c917f4b88dd656165&page=${params.page +1}`
    );
    return result.data;
  },
  getMovieByName: async (params) => {
    const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5545b123bb0d696c917f4b88dd656165&query=${params.title.replaceAll(' ', '+')}&page=${params.page +1}`)
    return result.data
  }
};

export default service;
