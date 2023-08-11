<template>
	<li :class="{ isFavorite: character.isFavorite }">
		<ul>
			<li><img :src="character.imageUrl" :alt="character.name" /></li>
			<li class="name">
				<span>{{ character.name }}</span>
				<span
					v-if="character.tvShows.length > 0"
					class="tv-icon"
					@mouseover="showTooltip = true"
					@mouseleave="showTooltip = false"
					><div v-if="showTooltip" class="tooltip" v-html="character.tvShows.join('<br />')"></div>
					<font-awesome-icon
						:icon="['fas', 'tv']"
						bounce
						style="--fa-animation-duration: 2s; --fa-animation-iteration-count: 2" />
				</span>
			</li>
			<li>{{ character.films.length }}</li>
			<li class="star">
				<span class="star-icon" @click="toggleFavorite(character)">{{ character.isFavorite ? '★' : '☆' }}</span>
			</li>
		</ul>
	</li>
</template>

<script>
export default {
	props: ['character'],
	data() {
		return {
			showTooltip: false,
		}
	},
	methods: {
		toggleFavorite(character) {
			this.$emit('toggleFavorite', character)
		},
	},
}
</script>

<style scoped>
ul {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0;
	margin-bottom: 10px;
}
li {
	flex: 1;
	margin: 10px;
	text-align: center;
}

img {
	width: 70px;
	height: 70px;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 10px;
}

.star-icon {
	font-size: 35px;
	cursor: pointer;
}
.star {
	text-align: center;
}

.tv-icon {
	position: relative;
	font-weight: bold;
	margin-left: 10px;
	cursor: pointer;
}

.name {
	flex: 2;
}
.isFavorite .star {
	color: goldenrod;
}
.tooltip {
	position: absolute;
	min-width: 150px;
	font-size: 14px;
	background-color: #333;
	color: white;
	padding: 5px;
	border-radius: 5px;
	top: 100%;
	left: 0;
	transform: translateX(-50%);
	white-space: pre-line;
	text-align: center;
}

@media (max-width: 1200px) {
	img {
		width: 50px;
		height: 50px;
		margin-right: 5px;
	}
	li {
		margin: 5px;
	}
}
</style>
