<template>
  <v-container>
    <v-row class="justify-center text-center mt-6">
      <v-col cols="12">
          
        <h1>Video Details</h1>
        <h1>Id: {{video.title}}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params)
    this.video = this.$route.params.video

  },
  data: () => ({
    video :''
  })
};
</script>

<style>
</style>