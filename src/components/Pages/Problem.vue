<template>
	<v-container>
    <addition-dialog></addition-dialog>

		<v-layout row wrap>
			<v-flex xs12>
				<h5>Проблема</h5>
				<blockquote>
					Человечество стоит на краю новой технологической революции, которая кардинально изменит то,
						как мы живем, работаем и относимся друг к другу.
						Подобного масштаба и сложности перемен человечеству еще никогда не доводилось испытывать.
						Конечно, сейчас невозможно предвидеть, как она будет разворачиваться, но уже сейчас очевидно,
						что она затронет все группы, слои и прослойки человечества, все профессии и т.д.
					<br>
					<div class="text-xs-right accent--text"><b>Клаус Шваб</b></div>
				</blockquote>
				<br>
				<p>Следствием стремительного развития высоких технологий, таких как искусственый интеллект,
					блокчейн, роботизация, интернет вещей и т.д., а также повсеместности сети Интернет,
					автоматизация	большинства производственных, бизнес и других рабочих процессов становится
					<a target="_blank" href="https://hightech.fm/2016/12/13/cant_stop">неизбежной</a>.
				</p>
				<p>Данный процесс эволюции общества называют <a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%82%D0%B2%D1%91%D1%80%D1%82%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F">
					четвёртой промышленной революцией</a>	или Индустрия 4.0.
						Сегодня этот процесс приобретает лавинообразный характер.
				</p>
				<p>Вместе с невероятными возможностями для всего человечества четвертая промышленная революция несет и
				потенциальную угрозу.</p>
				<!--<p>По данным исследования ... % автоматизации в России ...</p>-->
					<!--Сдерживающим фактором является нехватка кадров и несформированная законодательная база-->
				<p>Перед Россией, как и <router-link to="/practice">другими странами</router-link>, стоит непростая задача
					- не допустить социальной катастрофы в связи
					с <a target="_blank" href="https://lenta.ru/articles/2017/11/14/rob_job/">многомиллионной безработицей</a>.
					По разным оценкам, она возрастет на <a target="_blank" href="https://www.kommersant.ru/doc/3453749">
						3 миллиона</a> в ближайшее время, а в течение 15-20 лет <a target="_blank" href="https://www.rbc.ru/opinions/economics/13/01/2017/5878d2389a79470077130332">
						исчезнут 50-70%</a> нынешних рабочих мест.
				</p>
				<p>Очень вероятно, что для этого придется
					<a target="_blank" href="https://hightech.fm/2016/12/15/chinese_influence">переосмыслить</a>
					всю	концепцию экономики и социального уклада.</p>
				<p>
					Самым явным и кардинальным решением данной проблемы, <router-link to="/views">по мнению многих</router-link>,
					является введение <router-link to="/">безусловного базового дохода</router-link>.
				</p>
				<br>
				<h6 class="text-xs-center">
					Виды деятельности, подверженные значительной автоматизации
					<v-btn large class="primary" @click.stop="openDialog('Вид деятельности')">
            Добавить
          </v-btn>
				</h6>
				<v-card class="mb-2" v-for="job in jobsInDanger" :key="job.id">
					<v-container fluid>

						<v-layout row>
							<v-flex xs7>
								<!-- <v-card-title> -->
									<h6 class="accent--text">{{ job.title }}</h6>
								<!-- </v-card-title> -->
								<span v-for="tech in job.techs" :key="tech._id">
									<a v-if="tech.url" class="primary--text" :href="tech.url" :target="tech.target">
										{{ tech.name }}
									</a>
									<span v-else>{{ tech.name }}</span>
									&nbsp; &nbsp; &nbsp;
								</span>
							</v-flex>
							<v-flex xs5>
								<p>
									<span v-for="s in job.services" :key="s._id">
										<a :href="s.url" target="_blank">
											{{ s.name }}
										</a>
										&nbsp; &nbsp; &nbsp; &nbsp;
									</span>
								</p>
							</v-flex>
						</v-layout>

						<v-layout row v-if="jobsInDanger" class="mt-3">
							<v-flex xs12>
								<!-- <p> -->
									<span v-for="p in job.proofs" :key="p._id">
										<a v-if="p.url" target="_blank" :href="p.url" class="secondary--text">
											{{ p.title }}
										</a>
										<span v-else>{{ p.title }}</span>
										&nbsp; <b>&#183;</b> &nbsp;
									</span>
									<a style="cursor: pointer" @click.stop="openDialog('Подтверждение')">добавить</a>
								<!-- </p> -->
							</v-flex>
						</v-layout>
					</v-container>
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
  import openDialog from '@/utils/open-dialog'
  import axiosInst from '@/utils/axios-instance'

	export default {
	  data () {
	    return {
        jobsInDanger: null  // IT-сервисы, Car-sharing
		  }
	  },
		created: function () {
//			axios.get('http://83.234.160.113:8585/_db/basic-income/income/jobs-in-danger')
			axiosInst.get('/api/load/jobs-in-danger')
					.then(resp => {
					  this.jobsInDanger = resp.data.jobs
					})
					.catch(console.error)
		},
    methods: {
	    openDialog
    }
	}
</script>

<style scoped>
</style>
