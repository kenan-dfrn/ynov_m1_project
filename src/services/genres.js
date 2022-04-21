import axios from 'axios'

const service = {
  getGenreList: async () => {
    const result = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=5545b123bb0d696c917f4b88dd656165')
    return result.data.genres
  }
  
}

export default service