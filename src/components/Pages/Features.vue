<template>
	<v-container>
		<app-page-in-dev></app-page-in-dev>

		<v-layout row wrap>
			<v-flex xs12>
				<h5 class="primary--text">Каким должен быть базовый доход</h5>
				<v-btn class="primary">Добавить</v-btn>
				<br>
				<br>
				<ul>
					<li>
						<p>должен быть не менее прожиточного минимума</p>
					</li>
					<li>
						<p>нельзя потратить на покупку алкоголя, сигарет, азартные игры и т.д.
							Например, начислять на спец. карту</p>
					</li>
					<li>
						<p>...</p>
					</li>
				</ul>

			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
	  computed: {
	  }
	}
</script>