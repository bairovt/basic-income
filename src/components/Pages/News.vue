<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<h5>Новости</h5>
			</v-flex>
		</v-layout>
		<news :news="news"></news>
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
				tags: [] // all
			}).then(resp => {
				  this.news = resp.data.news
				})
				.catch(console.error)
		}
	}
</script>
