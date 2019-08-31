import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCJ3J9D6KVyIjaMUReF8UspedH_8uzRXXw",
  authDomain: "new-social-97999.firebaseapp.com",
  databaseURL: "https://new-social-97999.firebaseio.com",
  projectId: "new-social-97999",
  storageBucket: "new-social-97999.appspot.com",
  messagingSenderId: "795026422452",
  appId: "1:795026422452:web:907bc11d8c98c57e"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
