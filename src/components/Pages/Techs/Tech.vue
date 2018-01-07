<template>
	<v-container v-if="tech">
		<v-layout row wrap>
			<v-flex xs12>
				<h5>{{tech.name}}</h5>
				<!-- <h5 :html="tech.title ? tech.title : tech.name"></h5> -->
			</v-flex>
		</v-layout>

		<v-layout row wrap class="mb10">
			<v-flex xs12 md6>
				<div v-if="tech.youtube" class="video" >
					<!-- <iframe width="560" height="315" :src="tech.youtube" -->
					<iframe width="100%" height="100%" :src="tech.youtube"
									frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen
					>
					</iframe>
				</div>
			</v-flex>
		</v-layout>

		<news :news="tech.news"></news>

	</v-container>
</template>

<script>
	import axios from 'axios'
	import axiosInst from '@/utils/axios-instance'

	export default {
		data () {
			return {
				tech: null,
				techLabel: this.$route.params['techlabel']
			}
		},
	  created () {
			axiosInst.get('/api/load/techs/' + this.techLabel).then(resp => {
					this.tech = resp.data.tech
				})
				.catch(console.error)
		}
	}
</script>
