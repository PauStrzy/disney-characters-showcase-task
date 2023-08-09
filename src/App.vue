<template>
	<div id="app">
		<favorites-header />
		<router-view />
	</div>
</template>

<script>
import FavoritesHeader from './components/FavoritesHeader.vue'

export default {
	components: {
		FavoritesHeader,
	},
}
</script>

<style>
/* Add global styles here */
</style>
