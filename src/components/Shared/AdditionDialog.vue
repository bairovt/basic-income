<template>
	<v-layout row>
		<v-flex xs12>
			<v-dialog v-model="dialog" max-width="500px"
			          transition="false"
			>
				<v-card>
					<v-card-title>
            Предложить  &nbsp <b>{{ additionSubject }}</b>
					</v-card-title>

					<v-card-text>
						<form @submit.prevent="sendAddition">
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
							<v-alert color="success" icon="info" dismissible v-model="alert">
								Благодарим за участие!
							</v-alert>
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
  import axiosInst from "@/utils/axios-instance"

	export default {
	  data () {
	    return {
        alert: false,
		    loading: false,
        name: '',
        email: '',
        message: '',
	    }
	  },
	  computed: {
      additionSubject () {
	      return this.$store.getters.additionSubject
	    },
      dialog: {
        get () {
          return this.$store.getters.dialog
        },
        set (val) {
          this.alert = false; // на случай закрытия диалога с активным алертом
          return this.$store.commit('setDialogState', val)
        }
      }
	  },
    methods: {
//	    closeDialog () {
//	      this.$store.commit('setDialogState', false)
//      },
      sendAddition () {
        this.alert = false;    //исчезание алерта при повторноай отправке
//        this.$store.commit('setLoading', true);
        this.loading = true;
        axiosInst.post('/api/send/addition', {
          name: this.name,
          email: this.email,
          message: this.message,
          subject: this.additionSubject
        })
            .then(resp => {
              this.alert = true; // todo: сделать плавным появления alert
              this.loading = false;
//              this.$store.commit('setLoading', false);
              this.message = ''; // очистка поля
//		          console.log('Благодарим за содействие!')
            })
            .catch(error => {
              this.loading = false;
              console.error(error)
            })
      }
    }
	}
</script>
