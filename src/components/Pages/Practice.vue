<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<app-page-in-dev></app-page-in-dev>
				<h5>Международная практика</h5>

				<v-card class="mb-2" v-for="n in news" :key="n._id">
					<v-card-title >
						<a v-if="n.url" class="secondary--text" :href="n.url" :target="n.target">
							{{ n.title }}
						</a>
					</v-card-title>
				</v-card>

			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import axios from 'axios';
import axiosInst from '@/utils/axios-instance'

export default {
	data () {
		return {
			news: null
		}
	},
	created: function () {
		axiosInst.get('/api/load/news/in_practice')
			.then(resp => {
				this.news = resp.data.news
			})
			.catch(console.error)
	}
}
</script>
