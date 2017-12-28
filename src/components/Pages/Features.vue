<template>
	<v-container>
		<app-page-in-dev></app-page-in-dev>
    <addition-dialog></addition-dialog>

		<v-layout row wrap>
			<v-flex xs12>
				<h5 class="primary--text">Каким, предположительно, должен быть базовый доход</h5>
				<v-btn class="primary" @click.stop="openDialog('Критерий базового дохода')">
          Предложить
        </v-btn>
				<br>
				<br>
				<ul>
					<li>
						<p>должен быть не менее прожиточного минимума</p>
					</li>
					<li>
						<p>должен выплачиваться только гражданам на территории страны</p>
					</li>
					<li>
						<p>должен начисляться на спец. счет, привязанный к отдельной карте</p>
					</li>
					<li>
						<p>можно расходовать на ограниченный перечень товаров и услуг (потребительская корзина)</p>
					</li>
					<li>
						<p>нельзя расходовать на покупку алкоголя, сигарет, азартные игры и т.д.</p>
					</li>
					<li>
						<p>нельзя перевести на другой счет</p>
					</li>
					<li>
						<p>не облагается налогом</p>
					</li>
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
