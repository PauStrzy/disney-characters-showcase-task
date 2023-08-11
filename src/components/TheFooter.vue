<template>
	<footer class="footer">
		<div class="container">
			<p>
				&copy;{{ currentYear }} by Paulina Strzyżewska with ♥ <br />
				All rights reserved.
			</p>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			currentYear: new Date().getFullYear(),
		}
	},
}
</script>

<style scoped>
.footer {
	font-size: 24px;
	background-color: white;
	text-align: center;
	padding: 20px 0;
	margin-top: 50px;
	color: rgb(60, 60, 60);
}

.container {
	max-width: 1200px;
	margin: 0 auto;
}
@media (max-width: 1200px) {
	.footer {
		font-size: 16px;
	}
}
</style>
