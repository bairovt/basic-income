<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<h5>Проблема</h5>
				<p>
					В условиях <router-link to="/revolution">четвертой промышленной революции</router-link>
					проблема массовой безработицы становится неизбежной.
				</p>
				<p>
					По разным оценкам, безработица возрастет на <a target="_blank" href="https://www.kommersant.ru/doc/3453749">
						3 миллиона</a> в ближайшее время, а в течение 15-20 лет <a target="_blank" href="https://www.rbc.ru/opinions/economics/13/01/2017/5878d2389a79470077130332">
						исчезнут 50-70%</a> нынешних рабочих мест.
				</p>				
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
				tags: ['revolution', 'problem']
			}).then(resp => {
				  this.news = resp.data.news
				})
				.catch(console.error)
		}
	}
</script>
