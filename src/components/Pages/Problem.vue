<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>				
				<!-- <blockquote></blockquote>

					<strong>Четвёртая промышленная революция</strong> — массовое внедрение киберфизических систем в производство,
					обслуживание человеческих потребностей, включая быт, труд и досуг. Изменения охватят самые разные стороны жизни:
					рынок труда, жизненную среду, политические системы, технологический уклад, человеческую идентичность и другие.
					Вызываемая к жизни экономической целесообразностью и привлекательностью повышения качества жизни,
					четвёртая промышленная революция несёт в себе риски повышения нестабильности и возможного коллапса мировой системы,
					в связи с чем её наступление воспринимается как вызов, на который человечеству предстоит ответить.
					</div>
					<div class="text-xs-right accent--text">
						<b><a href="https://ru.wikipedia.org/wiki/Четвёртая_промышленная_революция">
						Четвёртая промышленная революция - материал из Википедии</a></b>
					</div>
				 -->
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
				tags: ['revolution']
			}).then(resp => {
				  this.news = resp.data.news
				})
				.catch(console.error)
		}
	}
</script>
