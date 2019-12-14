# vuestacks-calendar-vue-firebase

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-calendar-vue-firebase/master/src/assets/cal-screen.JPG)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Overview

The VueStacks calendar demo utilizes general Vue.js + Firebase CRUD functions to enable creating, updating, and deleting of events in a modified Vuetify calendar component (see the following to learn more about Vuetify calendars: https://vuetifyjs.com/en/components/calendars).

See full component in ```components/Calendar.vue```

### Addition Dependencies

This demo uses ```vue-textarea-autosize``` as a dependency. See the following for installation instructions: https://www.npmjs.com/package/vue-textarea-autosize

### Setting Up Firebase

1. Set up a new project in Firebase with Database enabled.
2. Implement the following Firebase SDK scripts in main.js:

```
import firebase from "firebase";
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export const db = firebase.firestore();
```
Enjoy the demo! Submit an issue if you see anything that could be improved!
