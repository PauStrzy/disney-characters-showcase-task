import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CharactersList from './components/CharactersList.vue'
import FavoriteCharacters from './components/FavoriteCharacters.vue'

const routes = [
	{ path: '/', component: CharactersList },
	{ path: '/favorites', component: FavoriteCharacters },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
