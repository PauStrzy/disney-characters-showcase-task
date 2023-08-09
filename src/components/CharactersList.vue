<template>
	<div>
		<ul>
			<character-item
				v-for="character in characters"
				:key="character.id"
				:character="character"
				@toggleFavorite="toggleFavorite" />
		</ul>
	</div>
</template>

<script>
import CharacterItem from './CharacterItem.vue'

export default {
	// props: ['characters'],
	components: {
		CharacterItem,
	},
	data() {
		return { characters: [] }
	},
	mounted() {
		this.fetchCharacters()
	},
	methods: {
		// toggleFavorite(character) {},
		async fetchCharacters() {
			try {
				const response = await fetch('https://api.disneyapi.dev/character')
				const data = await response.json()
				console.log(data)
				this.characters = data.data.filter((character) => character.films.length > 0)
			} catch (error) {
				console.log('Error:', error)
			}
		},
	},
}
</script>
<style scoped>
ul {
	list-style: none;
	padding: 0;
}

li {
	display: flex;
	align-items: center;
	margin: 10px;
}

img {
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 10px;
}

.star-icon {
	cursor: pointer;
}

.tv-icon {
	font-weight: bold;
	margin-left: 5px;
	color: #4400ff;
}
</style>
