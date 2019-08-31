<template>
  <v-app>
    <v-content>
      <Calendar/>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';

export default {
  name: 'App',
  components: {
    Calendar,
  },
  data: () => ({
    //
  }),
};
</script>
