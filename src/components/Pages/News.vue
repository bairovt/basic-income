<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<h5>Новости</h5>

				<v-card class="mb-2" v-for="n in news" :key="n._id">
					<v-card-title >
						<a class="secondary--text" :href="n.url" :target="n.target">
							{{ n.title }}
						</a>
					</v-card-title>
				</v-card>

			</v-flex>
		</v-layout>
		<br>
		<br>
		<br>
	</v-container>
</template>

<script>
	import axios from 'axios'
  import axiosInst from '@/utils/axios-instance'

	export default {
	  data () {
	    return {
        news: null
		  }
	  },
		created: function () {
			axiosInst.post('/api/load/news', {
				tags: 'all'
			}).then(resp => {
				  this.news = resp.data.news
				})
				.catch(console.error)
		}
	}
</script>

<style scoped>
</style>
