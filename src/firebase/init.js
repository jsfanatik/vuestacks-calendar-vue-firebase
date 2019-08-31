import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyCJ3J9D6KVyIjaMUReF8UspedH_8uzRXXw",
  authDomain: "new-social-97999.firebaseapp.com",
  databaseURL: "https://new-social-97999.firebaseio.com",
  projectId: "new-social-97999",
  storageBucket: "new-social-97999.appspot.com",
  messagingSenderId: "795026422452",
  appId: "1:795026422452:web:907bc11d8c98c57e"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
