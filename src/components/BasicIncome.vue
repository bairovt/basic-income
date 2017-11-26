<template>
	<v-container>  <!-- fluid class="mt-3"-->
		<app-page-in-dev></app-page-in-dev>
		<addition-dialog></addition-dialog>

		<v-layout row>
			<v-flex>
				<h5>Базовый доход</h5>
				<p>Сегодня, как никогда, человечество имеет возможность воплотить мечту, которую не удавалось воплотить на
					протяжении всей предыдущей истории - обеспечить человека насущным, дать ему настоящую свободу.</p>
				<p>Более того, вследствии <router-link to="/problem">тотальной автоматизации</router-link> человеческого труда
					повсеместное введение базового дохода становится просто необходимым.
				</p>
				<p>
					На данном ресурсе <b>базовый доход</b> (БД) понимается как обобщенная идея, сочетающая в себе такие понятия
					как:
					<a target="_blank" href="https://ru.wikipedia.org/wiki/Безусловный_базовый_доход">
						безусловный базовый доход</a> (ББД), безусловный основной доход (БОД), универсальный базовый доход,
					а также <router-link to="/alternative">альтернативные меры</router-link> по решению
					<router-link to="/problem">проблемы</router-link>
					массовой безработицы, связанной с четвертой промышленной революцией.
				</p>
				<p><router-link to="/features">Критерии БД независимо от способа реализации</router-link></p>
				<br>
				<br>
			</v-flex>
		</v-layout>

		<v-layout row wrap>
			<v-flex xs12 class="text-xs-center">
				<h5>Аргументы</h5>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-left">
				<h5 class="text-xs-center">
					За
					<v-btn class="primary" @click.stop="openDialog('аргумент ЗА')">Предложить</v-btn>
				</h5>
				<ul>
					<li>
						<p><a target="_blank" href="https://hightech.fm/2016/12/14/ubi_health">
						Положительно влияет на психическое здоровье</a></p>
					</li>
					<li>
						<p>Каждый получит возможность развиваться в интересном для себя направлении</p>
					</li>
					<li><p>...</p></li>
				</ul>
			</v-flex>
			<v-flex xs12 sm6 class="text-xs-right">
				<h5 class="text-xs-center">
					Против
					<v-btn class="primary" @click.stop="openDialog('аргумент Против')">Предложить</v-btn>
				</h5>
				<ul>
					<li>
						<p>Повлечет инфляцию</p>
						контраргумент: инфляции быть не должно, т.к. БД не подразумевает дополнительной эмиссии денег
					</li>
					<li><p>...</p></li>
				</ul>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  import openDialog from '@/utils/open-dialog'

	export default {
		methods: {
      openDialog
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
