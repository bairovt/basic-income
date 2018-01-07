<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<h5>Видео о базовом доходе</h5>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12 md6 class="pa-1" v-for="v in videos" :key="'v'+v.id">
				<div class="video">
					<iframe width="100%" height="100%" :src="v.url"
					frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
				</div>
			</v-flex>
		</v-layout>
		<br>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			videos: [
				{
					id: 1, url: "https://www.youtube.com/embed/zQS1n1CC8ng"
				},
				{
					id: 2, url: "https://www.youtube.com/embed/ekv5wPDM_z8"
				},
				{
					id: 3, url: "https://www.youtube.com/embed/TYjSAPoTkzA"
				}
			]
		}
	}
}
</script>
