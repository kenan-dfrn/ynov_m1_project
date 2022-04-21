import axios from 'axios'

const service = {
  getPopularMovies: async () => {
    const result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5545b123bb0d696c917f4b88dd656165')
    return result.data.results
  },

  getMoviesByGenre: async (genreId) => {
    const result = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=5545b123bb0d696c917f4b88dd656165`)
    return result.data.results
  }
  
}

export default service