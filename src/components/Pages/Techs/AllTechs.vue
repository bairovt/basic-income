<template>
	<v-container>
		<!-- <app-page-in-dev></app-page-in-dev> -->
		<v-layout row wrap>
			<v-flex xs12>
				<h5>Революционные технологии</h5>

				<v-card class="mb-2" v-for="tech in techs" :key="tech._id">
					<v-card-title v-if="tech.label || tech.url">
						<a v-if="tech.url" :href="tech.url" target="_blank">
							{{ tech.name }}
						</a>
						<router-link v-else :to="'/techs/' + tech.label" class="primary--text">
							{{ tech.name }}
						</router-link>
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
			techs: null
		}
	},
	created: function () {
		axiosInst.get('/api/load/techs').then(resp => {
				this.techs = resp.data.techs
			})
			.catch(console.error)
	}
}
</script>
