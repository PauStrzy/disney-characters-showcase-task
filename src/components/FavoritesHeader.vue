<template>
	<div>
		<header>
			<h1>Disney</h1>
			<p @click="toggleView" class="my-favorites-link">{{ onHomePage ? 'Link to My Favorites' : 'Back Home' }}</p>
		</header>
		<div class="color-break"></div>
	</div>
</template>
<script>
export default {
	data() {
		return { onHomePage: true }
	},
	methods: {
		toggleView() {
			if (this.onHomePage) {
				this.$router.push('/favorites') // Update the route path to '/favorites'
			} else {
				this.$router.push('/')
			}
			this.onHomePage = !this.onHomePage
		},
	},
}
</script>
<style scoped>
header {
	display: flex;
	align-self: flex-start;
	padding: 10px;
	text-align: left;
}
h1 {
	padding-right: 10px;
	text-transform: uppercase;
}

.my-favorites-link {
	font-size: 20px;
	color: rgb(60, 60, 60);
	border-bottom: 1px solid;
	cursor: pointer;
}
.color-break {
	width: 100vw;
	height: 50px;
	background-color: #fff;
	padding: 0;
	margin: 0;
	margin-bottom: 100px;
}
@media (max-width: 1200px) {
	header {
		align-self: center;
		justify-content: center;
	}
	.my-favorites-link {
		width: 100vw;
		font-size: 18px;
	}
}
</style>
