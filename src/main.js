import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Movie from './plugins/movies'
import Genre from './plugins/genres'

createApp(App).use(store).use(router).use(Movie).use(Genre).mount('#app')
