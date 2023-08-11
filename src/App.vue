<template>
	<div id="app">
		<favorites-header />
		<router-view />
		<the-footer></the-footer>
	</div>
</template>

<script>
import FavoritesHeader from './components/FavoritesHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
	components: {
		FavoritesHeader,
		TheFooter,
	},
}
</script>
