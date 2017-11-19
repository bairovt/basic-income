<template>
	<v-container>  <!-- fluid class="mt-3"-->
		<v-layout row>
			<v-flex>
				<h5 class="primary--text">Базовый доход</h5>
				<!--<h5 class="primary&#45;&#45;text">-->
				<p>
					На данном ресурсе <b>базовый доход (БД)</b> понимается как обобщенная идея, сочетающая в себе такие понятия
					как:
					<a target="_blank" href="https://ru.wikipedia.org/wiki/Безусловный_базовый_доход">
						безусловный базовый доход (ББД)</a>, безусловный основной доход (БОД), универсальный базовый доход,
					а также <router-link to="/alternative">альтернативные меры</router-link> по решению
					<router-link to="/problem">проблемы</router-link>
					массовой безработицы, связанной с четвертой промышленной революцией.
				</p>

				<br>
				<br>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12 class="text-xs-center primary--text">
				<h5>Аргументы</h5>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-left">
				<h5 class="text-xs-center">За</h5>
				<ul>
					<li>
						<p><a target="_blank" href="https://hightech.fm/2016/12/14/ubi_health">
						Положительно влияет на психическое здоровье</a></p>
					</li>
					<li><p>...</p></li>
					<li><p>...</p></li>
					<li><p>...</p></li>
				</ul>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-right">
				<h5 class="text-xs-center">Против</h5>
				<ul>
					<li>
						<p>Повлечет инфляцию</p>
						контраргумент: инфляции быть не должно, т.к. БД не подразумевает дополнительной эмиссии денег
					</li>
					<li><p>...</p></li>
					<li><p>...</p></li>
					<li><p>...</p></li>
				</ul>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		computed: {
	    meetups () {
	      return this.$store.getters.featuredMeetups
	    }
		},
		methods: {
	    onLoadMeetup (id) {
	      this.$router.push('/meetups/'+id)
	    }
		}
	}
</script>

<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		background-color: rgba(0,0,0,0.5);
		padding: 10px;
		color: white;
		font-size: 2em;
	}
	.carousel__controls {       /*does not imply - how to change default classes*/
		height: 20px !important;
	}
	ul {
		list-style-type: none;
	}

</style>