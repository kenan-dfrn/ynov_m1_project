import axios from 'axios'

const service = {
  getPopularMovies: async () => {
    const result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5545b123bb0d696c917f4b88dd656165')
    return result.data.results
  },
  getMovie: async (id) => {
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5545b123bb0d696c917f4b88dd656165`)
    return result.data
  },
  getRecommendations: async (id) => {
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5545b123bb0d696c917f4b88dd656165`)
    return result.data.results
  },
  getSimilarMovies: async (id) => {
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=5545b123bb0d696c917f4b88dd656165`)
    return result.data.results
  }
}

export default service