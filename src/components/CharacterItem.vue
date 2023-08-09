<template>
	<li>
		<img :src="character.imageUrl" :alt="character.name" />
		<span>{{ character.name }}</span>
		<span v-if="character.tvShows.length > 0" class="tv-icon">TV</span>
		<span class="star-icon" @click="toggleFavorite">{{ character.isFavorite ? 'fav' : '' }}</span>
	</li>
</template>

<script>
export default {
	props: ['character'],
	methods: {
		toggleFavorite() {
			this.$emit('toggleFavorite', this.character)
		},
	},
}
</script>

<style scoped>
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
	color: #ff9800;
}
</style>
