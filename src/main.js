import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import CharactersPage from './components/CharactersPage.vue'
import FavoriteCharacters from './components/FavoriteCharacters.vue'

library.add(faTv)

const routes = [
	{ path: '/', component: CharactersPage },
	{ path: '/favorites', component: FavoriteCharacters },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
