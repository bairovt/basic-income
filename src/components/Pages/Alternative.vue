<template>
	<v-container>
		<app-page-in-dev></app-page-in-dev>
    <addition-dialog></addition-dialog>

		<v-layout row wrap>
			<v-flex xs12>
				<h5>Альтернатива</h5>
				<p>Альтернативой <a target="_blank" href="https://ru.wikipedia.org/wiki/Безусловный_базовый_доход">
					безусловному базовому доходу</a> может стать трансформация существующей социальной системы.
				</p>
				<p>Такие меры как:</p>
				<ul>
					<li>
						<p>Повышение пособий по безработице до уровня прожиточного минимума с их сохранением
							после устройства на работу до достижения определенного уровня оптаты труда.</p>
					</li>
					<li>
						<p>Повышение детских пособий до уровня прожиточного минимума.</p>
					</li>
				</ul>
				<br>
				<v-btn class="primary" @click.stop="openDialog('Альтернативу')">
          Предложить меру
        </v-btn>

				<!--
				<h6>Социальные технологии</h6>

				<h6>Мудрость толпы (Wisdom of crowd)</h6>
				<h6>Ясно, что уже пора начинать двигаться в этом направлении...</h6>
				<v-btn>Предложить путь</v-btn>
				-->
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
  import openDialog from '@/utils/open-dialog'
	export default {
	  computed: {
	  },
    methods: {
	    openDialog
    }
	}
</script>
