<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<h5>О проекте</h5>
				<!--<p>методом краудсорсинга.</p>-->
				<p>Неравнодушным к судьбе нашего государства предлагаю принять участие в проекте</p>
				<br>
			</v-flex>
			<v-flex xs12 sm6>
				<form>
					<v-text-field>
					</v-text-field>
					<v-text-field>
					</v-text-field>
					<v-btn>Отправить</v-btn>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import VTextField from "vuetify/es5/components/VTextField/VTextField";

  export default {
    components: {VTextField},
    computed: {
	  }
	}
</script>