<template>
  <v-app class="home">
    <v-app-bar
      app
      style="text-align:center !important;"
      color="blue"
      dark
    >
        <v-spacer></v-spacer>
      <div class="d-flex align-center" >
        <h1>3alemni</h1>
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

    <v-content style="background-image: url(toolss.jpg); background-repeat: repeat;">
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
