<template>
	<v-layout row wrap>
		<v-flex xs12>

			<v-card class="mb-2" v-for="n in news" :key="n._id">
				<v-card-title >
					<a class="secondary--text" :href="n.url" :target="n.target">
						<span class="news-date">{{ n.date }}</span>  {{ n.title }}
					</a>
				</v-card-title>
			</v-card>

		</v-flex>
	</v-layout>
</template>

<script>
	export default {
	  props: ['news']
	}
</script>

<style scoped>
	.news-date {
		color: #cccccc;
		margin-right: 8px;
	}
</style>
