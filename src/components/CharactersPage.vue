<template>
	<div class="characters-page">
		<popular-characters :characters="characters" @toggleFavorite="toggleFavorite" />
		<div class="box-search-field">
			<div class="img-field">
				<img src="../assets/img/waltdisneylogo.png" alt="walt disney logo - a castle bt the river" />
				<div class="img-overlay"></div>
			</div>
			<div class="text-field">
				<p>List of {{ characters.length }} Disney Characters with own TV Shows</p>
				<h3>The Best Animated Disney Characters of All Time</h3>
				<input type="text" placeholder="Search Character..." v-model="searchInput" @input="filterCharacters" />
			</div>
		</div>
		<div class="lists-sections">
			<div class="characters-list">
				<characters-list :characters="filteredCharacters" @toggleFavorite="toggleFavorite" />
			</div>
			<div class="favorite-characters">
				<favorite-characters :favoriteCharacters="favoriteCharacters" @toggleFavorite="toggleFavorite" />
			</div>
		</div>
	</div>
</template>

<script>
import CharactersList from './CharactersList.vue'
import FavoriteCharacters from './FavoriteCharacters.vue'
import PopularCharacters from './PopularCharacters.vue'

export default {
	components: {
		CharactersList,
		FavoriteCharacters,
		PopularCharacters,
	},

	data() {
		return { characters: [], favoriteCharacters: [], searchInput: '', filteredCharacters: [] }
	},
	mounted() {
		this.fetchCharacters()
	},
	methods: {
		toggleFavorite(character) {
			character.isFavorite = !character.isFavorite
			this.favoriteCharacters = this.characters.filter((character) => character.isFavorite)
		},

		async fetchCharacters() {
			try {
				const response = await fetch('https://api.disneyapi.dev/character')
				const data = await response.json()
				this.characters = data.data.filter((character) => character.films.length > 0)
				this.filteredCharacters = this.characters
				this.favoriteCharacters = this.characters.filter((character) => character.isFavorite)
			} catch (error) {
				console.log('Error:', error)
			}
		},
		filterCharacters() {
			this.filteredCharacters = this.characters.filter((character) =>
				character.name.toLowerCase().includes(this.searchInput.toLowerCase())
			)
		},
	},
}
</script>
<style scoped>
.characters-page {
	margin: 0;
	padding: 0;
}
.box-search-field {
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	background-color: rgb(56, 56, 56);
	max-width: 1240px;
	color: #fff;
	border-radius: 20px;
	min-height: 350px;
}
.img-field {
	position: relative;
	flex: 2;
	border-radius: 20px;
	overflow: hidden;
}
img {
	height: 100%;
	width: 100%;
	border-radius: 20px;
}
.img-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(193, 192, 226, 0.5), rgba(83, 84, 86, 0.5));
	pointer-events: none;
}

.text-field {
	display: flex;
	flex-direction: column;
	align-items: start;
	flex: 3;
	padding: 30px;
}
h3 {
	font-size: 45px;
	width: 650px;
	margin-top: 0;
	text-align: left;
}

input {
	border-radius: 5px;
	padding: 10px;
	width: 500px;
	font-size: 20px;
}
.lists-sections {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
	display: flex;
}

.characters-list,
.favorite-characters {
	flex: 1;
	margin: 20px 0;
	background-color: #fff;
	color: #213547;
}
.characters-list {
	margin-right: 20px;
	padding: 20px;
	max-width: 600px;
}

.favorite-characters {
	margin-left: 20px;
}

@media (max-width: 1200px) {
	.lists-sections {
		flex-direction: column;
		align-items: center;
	}
	.box-search-field {
		flex-direction: column;
		align-items: center;
		max-width: 80vw;
	}
	h3 {
		max-width: 70vw;
		font-size: 20px;
		text-align: center;
	}
	input {
		max-width: 60vw;
		font-size: 13px;
	}
	.text-field {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.characters-list {
		min-width: 80vw;
		max-width: 80vw;
	}
	.characters-list,
	.favorite-characters {
		margin: 10px auto;
		padding: 0;
	}
}
</style>
