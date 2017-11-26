import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dialog: false,
    loading: false,
    additionSubject: 'default',
    jobsInDanger: []
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setAdditionSubject (state, payload) {
      state.additionSubject = payload
    },
    setDialogState (state, payload) {
      state.dialog = payload
    },
  },
  actions: {
  },
  getters: {
    loading (state) {
      return state.loading
    },
    additionSubject (state) {
      return state.additionSubject
    },
    dialog (state) {
      return state.dialog
    },
    /*loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          // console.log(meetup.id,  meetupId)
          return meetup.id === meetupId
        })
      }
    },*/
    jobsInDanger (state) {
      return state.jobsInDanger
    }
  }
});
