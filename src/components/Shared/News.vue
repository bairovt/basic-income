<template>
	<v-layout row wrap class="mt-3">
		<v-flex xs12>
			<v-card class="mb-1" v-for="n in news" :key="n._id">
				<v-card-title >
					<span class="news-date">{{ n.date }}</span>
					<a class="secondary--text" :href="n.url" :target="n.target">
						{{ n.title }}
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
