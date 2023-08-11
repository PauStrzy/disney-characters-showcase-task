<template>
	<div class="favorite-section">
		<span class="star">★</span>
		<h2 class="header">My Favorites</h2>

		<ul class="character-headers">
			<li class="name">Name</li>
		</ul>
		<ul v-for="character in favoriteCharacters" :key="character.id">
			<li class="favorite-character">{{ character.name }}</li>
		</ul>
	</div>
</template>

<script>
import CharacterItem from './CharacterItem.vue'

export default {
	props: ['favoriteCharacters'],
	components: {
		CharacterItem,
	},
	methods: {
		toggleFavorite(character) {
			this.$emit('toggleFavorite', character)
		},
	},
}
</script>
<style scoped>
.favorite-section {
	position: relative;
	margin: 0 auto;
	padding: 20px;
	min-height: 700px;
	max-width: 600px;
	background-color: #fff;
	color: #213547;
}
.header {
	text-align-last: left;
}
.star {
	display: block;
	position: absolute;
	top: 20px;
	right: 20px;
	font-size: 50px;
	color: goldenrod;
}

h2 {
	margin-left: 20px;
}

.character-headers {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
	padding: 0;
	margin-bottom: 10px;
}
li {
	display: flex;
	align-items: center;
	margin: 10px;
}
.name {
	font-weight: bold;
}

@media (max-width: 1200px) {
	.star {
		top: 0;
		right: 10px;
		font-size: 30px;
	}
	.favorite-section {
		padding: 0;
		min-width: 80vw;
		max-width: 80vw;
	}

	li {
		margin: 15px;
	}
	.character-headers {
		font-size: 13px;
	}
}
</style>
