<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<br>
				<blockquote>
					Человечество стоит на краю новой технологической революции, которая кардинально изменит то,
						как мы живем и работаем и относимся друг к другу.
						Подобного масштаба и сложности перемен человечеству еще никогда не доводилось испытывать.
						Конечно, сейчас невозможно предвидеть, как она будет разворачиваться, но уже сейчас очевидно,
						что она затронет все группы, слои и прослойки человечества, все профессии и т.д.
					<br>
					<div class="text-xs-right accent--text"><b>Клаус Шваб</b></div>
				</blockquote>
				<br>
				<p>Следствием стремительного развития высоких технологий, таких как искусственый интеллект,
					блокчейн, роботизация, интернет вещей и т.д., а также повсеместности сети Интернет,
					автоматизация большинства производственных, бизнес и других рабочих процессов становится неизбежной.
				</p>
				<p>Данный процесс эволюции общества называют <a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%82%D0%B2%D1%91%D1%80%D1%82%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D1%80%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D1%8F">
					четвёртой промышленной революцией</a>	или Индустриализация 4.0.
						Сегодня этот процесс приобретает лавинообразный характер.
				</p>
				<p>Вместе с невероятными возможностями для всего человечества четвертая промышленная революция несет и
				потенциальную угрозу.</p>
				<!--<p>По данным исследования ... % автоматизации в России ...</p>-->
					<!--Сдерживающим фактором является нехватка кадров и несформированная законодательная база-->
				<p>Перед Россией, как и <router-link to="/practice">другими странами</router-link>, стоит непростая задача
					- не допустить социальной катастрофы в связи с <a target="_blank" href="https://lenta.ru/articles/2017/11/14/rob_job/">многомиллионной безработицей</a>.</p>
				<p>Очень вероятно, что для это придется переосмыслить всю концепцию экономики и социального уклада.</p>
				<p>
					Самым явным и кардинальным решением данной проблемы, <router-link to="/views">по мнению многих</router-link>,
					является введение <router-link to="/">безусловного базового дохода</router-link>.
				</p>
				<br>
				<h6 class="accent--text text-xs-center">
					Виды деятельности, подверженные значительной автоматизации
					<v-btn large class="primary">Добавить</v-btn>
				</h6>
				<v-card class="mb-2" v-for="job in jobsInDanger" :key="job.id">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5>
								<v-card-title>
									<h6 class="accent--text">{{ job.title }}</h6>
								</v-card-title>
							</v-flex>
							<v-flex xs7>
								<v-card-title >
									<span v-for="tech in job.techs" :key="tech">
										<router-link to="" class="info--text">
											{{ tech }}
										</router-link>
										&nbsp;&nbsp;&nbsp;
									</span>
								</v-card-title>
							</v-flex>
						</v-layout>
						<v-layout row>
							<v-flex xs12>
								<span v-for="confirm in job.confirms" :key="confirm.id" >
									<router-link to="">
										{{ confirm.thesis }}
									</router-link>
									&nbsp;&nbsp;&nbsp;
								</span>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
	  computed: {
		  jobsInDanger () {
	      return this.$store.getters.jobsInDanger
	    },
	  }
	}
</script>

<style scoped>
</style>