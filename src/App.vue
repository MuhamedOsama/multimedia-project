<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <div class="d-flex align-center">
        <h1>Multimedia Project</h1>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <v-slide-y-transition>

      
      <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
