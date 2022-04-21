import GenreServices from '../services/genres'

export default {
  install: (app) => {
    app.config.globalProperties.$Genre = GenreServices
  }
}