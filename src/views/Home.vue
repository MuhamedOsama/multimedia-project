<template>
  <div class="home">
    <v-container>
      <v-row class="justify-center text-center">
        <v-col cols="4">
          <h1 class="mt-6">Upload Videos!</h1>
          <v-file-input class="mt-6" outlined @change="log" v-model="file" show-size counter small-chips label="File input w/ small chips"></v-file-input>
          <video v-if="video" class="mt-6" autoplay controls width="520" :src="video">
          <source type="video/mp4" :src="video">
          </video>
      </v-col>
      </v-row>
      
      
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data (){
    return{
      file : null,
      video:''
    }
    
  },
  methods: {
    log(){
      this.video = URL.createObjectURL(this.file)
      console.log(this.file)
    }
  }
};
</script>
