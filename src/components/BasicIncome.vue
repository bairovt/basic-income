<template>
	<v-container>  <!-- fluid class="mt-3"-->
		<v-layout row>
			<v-flex>
				<h5 class="primary--text"><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%B7%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B4%D0%BE%D1%85%D0%BE%D0%B4">
					Безусловный базовый (основной) доход</a>
				</h5>
				<br>
				<br>
				<br>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		computed: {
	    meetups () {
	      return this.$store.getters.featuredMeetups
	    }
		},
		methods: {
	    onLoadMeetup (id) {
	      this.$router.push('/meetups/'+id)
	    }
		}
	}
</script>

<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		background-color: rgba(0,0,0,0.5);
		padding: 10px;
		color: white;
		font-size: 2em;
	}

	.carousel__controls {       /*does not imply - how to change default classes*/
		height: 20px !important;
	}

</style>