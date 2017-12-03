<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<h5>О проекте</h5>
				<!--<p>методом краудсорсинга.</p>-->
				<p>
					Данный проект создан для всестороннего исследования <router-link to="/problem">актуальности</router-link>
					и возможности внедрения <router-link to="/">базового дохода</router-link> в России методом
					<a href="https://ru.wikipedia.org/wiki/Краудсорсинг" target="_blank">краудсорсинга</a>.
				</p>
				<p>Всем желающим предлагается принять участие в этом исследовании.</p>
				<!--<p>Всем желающим предлагается принять участие в развитии проекта.</p>-->
				<p>Проясним этот вопрос Коллективным Разумом!</p>
				<p><b>Принять участие</b> и поддержать можно следующими способами:</p>
				<ul>
					<li>
						<p>Внести свои дополнения на страницах сайта (кнопки ПРЕДОЛЖИТЬ, ДОБАВИТЬ)</p>
					</li>
					<li>
						<p>Отправить свои отзывы, предложения, пожелания, замечания
						и ссылки на полезные материалы через форму обратной связи на этой странице</p>
					</li>
					<li>
						<p><a style="cursor: pointer" @click.stop="bakeDialog=true">Поддрежать проект</a> материально</p>
					</li>
					<!--<li>-->
					<!--<p>Голосовать за посты и писать комментарии в блоге автора на платформе-->
					<!--<a target="_blank" href="https://golos.blog/">"ГОЛОС"</a></p>-->
					<!--</li>-->
					<!--<li>-->
						<!--<p>Публиковать и репостить информацию об этом ресурсе в социальных сетях</p>-->
					<!--</li>-->
				</ul>
				<br>
				<!--<p>-->
					<!--Если Вы желаете оказать прямое материальное содействие,-->
					<!--автора проекта это сподвигнет на большее :)-->
				<!--</p>-->

				<v-dialog v-model="bakeDialog" max-width="500px"
				          transition="false"
				>
					<v-card>
						<v-card-title>
							<h5>Любая сумма имеет значение</h5>
						</v-card-title>
						<v-card-text>
							<p>Сберкарта: <b>5469 7400 1270 4460</b></p>
							<p>Яндекс.Деньги: <b>410015805291743</b></p>
						</v-card-text>
						<v-card-actions>
							<v-btn color="primary" flat @click.stop="bakeDialog=false">Закрыть</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>

				<br>
			</v-flex>

			<v-flex xs12 sm6>
				<h5>Обратная связь</h5>
				<small>Обязательно только поле "Текст сообщения"</small>

				<v-alert color="success" icon="info" dismissible v-model="alert">
					Благодарим за участие!
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
							textarea
					></v-text-field>
					<v-btn class="primary"
					       type="submit"
					       :disabled="loading"
					       :loading="loading"
					>
						Отправить
						<span slot="loader" class="custom-loader">
						<v-icon light>cached</v-icon>
						</span>
					</v-btn>
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
		     alert: false,
		     bakeDialog: false
		  }
    },
    components: {VTextField},
    computed: {
      loading () {
        return this.$store.getters.loading
      }
	  },
	  methods: {
	    sendFeedback () {
	      this.alert = false;    //исчезание алерта при повторноай отправке
		    this.$store.commit('setLoading', true);
	      axiosInst.post('/api/send/feedback', {
	        name: this.name,
		      email: this.email,
		      message: this.message
	      })
	          .then(resp => {
              this.$store.commit('setLoading', false);
	            this.message = ''; // очистка поля
	            this.alert = true // todo: сделать плавным появления alert
//		          console.log('Благодарим за содействие!')
	          })
	          .catch(error => {
              this.$store.commit('setLoading', false);
	            console.error(error)
	          })
	    }
    }
	}
</script>
