<template>
	<div>
		<h3>Disney Characters</h3>
		<ul class="character-headers">
			<li class="character-header picture">Picture</li>
			<li class="character-header name">Name</li>
			<li class="character-header count">Films count</li>
			<li class="character-header">Favorites</li>
		</ul>
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
	components: {
		CharacterItem,
	},
	props: ['characters'],
	methods: {
		toggleFavorite(character) {
			this.$emit('toggleFavorite', character)
		},
	},
}
</script>
<style scoped>
h3 {
	text-align: left;
	margin-left: 10px;
}

li {
	margin: 10px;
}
.character-headers {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
	padding: 0;
	margin-bottom: 10px;
}
.character-header {
	flex: 1;
	font-weight: bold;
	text-align: center;
}

.character-headers .name {
	flex: 2;
}
@media (max-width: 1200px) {
	li {
		margin: 5px;
	}
	.character-headers {
		font-size: 13px;
	}
}
</style>
