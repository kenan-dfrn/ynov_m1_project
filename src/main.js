import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Movie from './plugins/movies'
import Genre from './plugins/genres'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(store).use(router).use(Movie).use(Genre).mount('#app')

