<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<h5>О проекте</h5>
				<!--<p>методом краудсорсинга.</p>-->
				<p>
					Данный проект создан для всестороннего исследования <router-link to="/problem">актуальности</router-link>
					и возможности внедрения <router-link to="/">базового дохода</router-link> в России.
				</p>
				<p>Всем желающим предлагается принять участие в развитии проекта.</p>
				<p><b>Принять участие</b> и поддержать можно следующими способами:</p>
				<ul>
					<li>
						<p>Внести свои дополнения на страницах сайта (кнопки "ДОБАВИТЬ" и др.)</p>
					</li>
					<li>
						<p>Голосовать за посты и писать комментарии в блоге автора на платформе
							<a target="_blank" href="https://golos.blog/">"ГОЛОС"</a></p>
					</li>
					<li>
						<p>Отправить свои отзывы, предложения, пожелания, замечания
						и ссылки на полезные материалы через форму обратной связи на этой странице</p>
					</li>
					<li>
						<p>Публиковать и репостить информацию об этом ресурсе в социальных сетях</p>
					</li>
				</ul>
				<br>
				<!--<p>-->
					<!--Если Вы желаете оказать прямое материальное содействие,-->
					<!--автора проекта это сподвигнет на большее :)-->
				<!--</p>-->
				<br>
			</v-flex>
			<v-flex xs12 sm6>
				<h5>Обратная связь</h5>
				<small>Обязательно только поле "Текст сообщения"</small>

				<v-alert color="success" icon="info" dismissible v-model="alert">
					Благодарим за содействие!
				</v-alert>
				<br>
				<br>
				<form @submit.prevent="sendFeedback">
					<v-text-field
							v-model="name"
							name="name"
							id="name"
							label="Имя"
					></v-text-field>
					<v-text-field
							v-model="email"
							type="email"
							name="email"
							id="email"
							label="E-mail"
					></v-text-field>
					<v-text-field
							v-model="message"
							name="message"
							id="message"
							label="Текст сообщения"
							required
							multiLine
					></v-text-field>
					<v-btn class="primary"
					       type="submit"
					>Отправить</v-btn>
				</form>
			</v-flex>
		</v-layout>
		<br>
		<br>
		<br>
	</v-container>
</template>

<script>
	import VTextField from "vuetify/es5/components/VTextField/VTextField";
	import axiosInst from "@/utils/axios-instance"

  export default {
    data () {
      return {
        name: '',
        email: '',
	      message: '',
	      alert: false
      }
    },
    components: {VTextField},
    computed: {
	  },
	  methods: {
	    sendFeedback () {
	      this.alert = false
	      axiosInst.post('/api/send-mail', {
	        name: this.name,
		      email: this.email,
		      message: this.message
	      })
	          .then(resp => {
	            this.message = '';
	            this.alert = true // todo: сделать плавным появления alert
//		          console.log('Благодарим за содействие!')
	          })
	          .catch(console.error)
	    }
    }
	}
</script>