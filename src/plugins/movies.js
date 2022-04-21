import MovieServices from '../services/movies'

export default {
  install: (app) => {
    app.config.globalProperties.$Movie = MovieServices
  }
}