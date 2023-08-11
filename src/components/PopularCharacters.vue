<template>
	<div class="popular-characters">
		<div class="popular-characters-moved">
			<h2>Most popular Disney Characters</h2>
			<ul class="popular-characters-list">
				<li v-for="character in popularCharacters" :key="character.id" :class="{ isFavorite: character.isFavorite }">
					<div class="character-box">
						<div class="img-box"><img class="character-img" :src="character.imageUrl" :alt="character.name" /></div>
						<div class="name-box">
							<div class="name">{{ character.name }}</div>
							<li class="star">
								<span class="star-icon" @click="toggleFavorite(character)">{{ character.isFavorite ? '★' : '☆' }}</span>
							</li>
						</div>

						<ul class="character-details">
							<li class="films">
								<div>Films:</div>
								<div class="films-no">{{ character.films.length }}</div>
							</li>
							<li class="tv-shows">
								<div>Tv-Shows:</div>
								<div class="tv-shows-no">{{ character.tvShows.length }}</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<div class="color-break"></div>
	</div>
</template>
<script>
export default {
	props: ['characters'],
	computed: {
		popularCharacters() {
			const sortedCharacters = [...this.characters].sort((a, b) => b.films.length - a.films.length)
			return sortedCharacters.slice(0, 3)
		},
	},
	methods: {
		toggleFavorite(character) {
			this.$emit('toggleFavorite', character)
		},
	},
}
</script>
<style scoped>
.color-break {
	width: 100vw;
	height: 100px;
	background-color: #fff;
	padding: 0;
	margin: 0;
	margin-bottom: 100px;
}
.popular-characters-moved {
	position: relative;
	top: 50px;
}

h2 {
	font-size: 44px;
}

.popular-characters-list {
	display: flex;
	justify-content: center;
}
.character-box {
	height: 350px;
	width: 200px;
	margin: 20px;
	padding: 10px;
	border-radius: 20px;
	padding-bottom: 0;
	background-color: #fff;
	box-shadow: 0px 2px 10px 1px rgba(128, 128, 128, 0.703);
}
.img-box {
	height: 200px;
	width: 200px;
}
.character-img {
	width: 100%;
	height: 100%;
	border-radius: 20px;
}
.star-icon {
	font-size: 35px;

	cursor: pointer;
}
.isFavorite .star {
	color: goldenrod;
}
.name-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.name {
	text-align: left;
}
.character-details {
	display: flex;
	height: 100px;
	flex-direction: column;
	justify-content: end;
	margin: 0 auto;
}
.films,
.tv-shows {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.tv-shows {
	padding-bottom: 10px;
}

@media (max-width: 1200px) {
	.popular-characters-moved {
		top: 35px;
	}
	.color-break {
		height: 80px;
		margin-bottom: 80px;
	}
	h2 {
		font-size: 34px;
	}
	.popular-characters-list {
		flex-direction: column;
		align-items: center;
	}
}
</style>
