<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 v-if="tech">
				<h5>{{tech.name}}</h5>

				<div v-if="tech.youtube">
					<iframe width="560" height="315" :src="tech.youtube"
									frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen>
					</iframe>
					<br />
					<br />
				</div>

				<v-card class="mb-2" v-for="n in tech.news" :key="n._id">
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
				tech: null,
			}
		},		
	  created () {
			axiosInst.get('/api/load/techs/' + this.$route.params.tech).then(resp => {
					this.tech = resp.data.tech
				})
				.catch(console.error)
		}
	}
</script>
