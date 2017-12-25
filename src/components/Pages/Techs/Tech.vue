<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 v-if="news">
				<!-- <h5>{{tech.name}}</h5> -->
				<h5>{{$route.params.tech}}</h5>

				<h5>Новости</h5>
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
	import axios from 'axios'
	import axiosInst from '@/utils/axios-instance'

	export default {
		data () {
			return {
				// tech: null,
				news: null
			}
		},
		computed: {
			// tech: this.$route.params.tech
		},
	  created () {
			axiosInst.post('/api/load/news', {
				tags: ['techs']
				// tags: 'all'
			}).then(resp => {
					this.news = resp.data.news
				})
				.catch(console.error)
		}
	}
</script>
