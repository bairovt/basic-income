<template>
	<v-container>
		<app-page-in-dev></app-page-in-dev>
    <addition-dialog></addition-dialog>

		<v-layout row wrap>
			<v-flex xs12>
				<h5 class="primary--text">Каким должен быть базовый доход</h5>
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
  import openDialog from '@/utils/open-dialog'

	export default {
    methods: {
	    openDialog
    }
	}
</script>
