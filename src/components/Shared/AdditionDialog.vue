<template>
	<v-layout row>
		<v-flex xs12>
			<v-alert color="success" icon="info" dismissible v-model="alert">
				Благодарим за содействие!
			</v-alert>

			<v-dialog v-model="dialog" max-width="500px">
				<v-card>
					<v-card-title>
						Добавить {{ addition }}
					</v-card-title>
					<v-card-text>
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
							       :disabled="loading"
							       :loading="loading"
							>
								Отправить
								<span slot="loader" class="custom-loader">
						<v-icon light>cached</v-icon>
						</span>
							</v-btn>
						</form>

					</v-card-text>
					<v-card-actions>
						<v-btn color="primary" flat @click.stop="dialog=false">Закрыть</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
	  data () {
	    return {
	      dialog: false,
        alert: false,
		    loading: false,
        name: '',
        email: '',
        message: '',
	    }
	  },
	  computed: {
	    addition () {
	      return this.$store.getters.addition
	    },
      loading () {
        return this.$store.getters.loading
      }
	  },
    methods: {
      sendAddition () {
        this.alert = false;    //исчезание алерта при повторноай отправке
        this.$store.commit('setLoading', true);
        axiosInst.post('/api/send-addition', {
          name: this.name,
          email: this.email,
          message: this.message,
          addition: this.addition
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