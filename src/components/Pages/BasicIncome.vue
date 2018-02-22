<template>
	<v-container>  <!-- fluid class="mt-3"-->
		<v-layout>
			<v-flex class="text-xs-right">
				<p>Человек, его права и свободы являются высшей ценностью</p>
				<!-- <p>&#8220;единственным источником власти в Российской Федерации является ее многонациональный народ&#8221;</p> -->
        <em>Конституция РФ</em>
			</v-flex>
    </v-layout>

		<addition-dialog></addition-dialog>

		<v-layout row>
			<v-flex>
				<h5>Базовый доход</h5>
				<p>Сегодня, как никогда, человечество имеет возможность воплотить мечту, которую не удавалось воплотить на
					протяжении всей предыдущей истории - обеспечить человека насущным, дать ему настоящую свободу.</p>
				<p>Более того, вследствии <router-link to="/revolution">тотальной автоматизации</router-link> человеческого труда
					введение базового дохода становится просто необходимым.
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
				<p>
					<a href="http://hbr-russia.ru/biznes-i-obshchestvo/ekonomika/p24661/" target="_blank">
						Бесплатные деньги: как всеобщий базовый доход может изменить мир</a>
				</p>
				<br />
				<v-layout row wrap>
					<v-flex xs12 md6 class="pa-1">
						<div class="video">
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ekv5wPDM_z8"
							frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
						</div>
					</v-flex>
					<v-flex xs12 md6 class="pa-1">
						<div class="video">
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zQS1n1CC8ng"
							frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
						</div>
					</v-flex>
				</v-layout>
				<!-- <p><router-link to="/features">Каким должен быть базовый доход.</router-link></p> -->
				<br>
				<p>
					<a href="https://www.rbc.ru/economics/16/02/2018/5a85a1ce9a79476afca9f8d5" target="_blank">
						Более половины россиян высказались за минимальный гарантированный доход</a>

				</p>
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
						<p>Значительно сократит преступность</p>
					</li>
					<li>
						<p>Решает проблему бедности</p>
					</li>
					<li>
						<!--<p>Каждый получит возможность развиваться в интересном для себя направлении</p>-->
						<p>Каждый получит возможность реализовать свое призвание</p>
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
					<li>
						<p>Люди станут лениться</p>
						контраргумент: или пойдут грабить...
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
