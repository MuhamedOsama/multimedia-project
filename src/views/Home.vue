<template>
    <v-container>
      <v-row class="justify-center text-center mt-6">
        <v-col cols="12">
          <v-btn @click="toggleUpload" fab large dark color="brown">
              <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-slide-y-transition mode="out-in" hide-on-leave="">

      
      <v-row v-if="upload" class="justify-center text-center">
        <v-col cols="12">
          <v-row justify="center">
          <v-col cols="12"  xs="12" sm="3" lg="3">
            <v-text-field
            label="Title"
            prepend-icon="mdi-page-layout-header"
            outlined
            v-model="title"
            placeholder="How to Send an Email"
          ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="3" lg="3">
            <v-text-field
            label="Author"
            prepend-icon="mdi-page-layout-header"
            outlined
            v-model="author"
            placeholder="John King"
          ></v-text-field>
          </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" xs="12" sm="6" lg="6">
            <v-text-field
            label="Description"
            v-model="description"
            prepend-icon="mdi-page-layout-body"
            outlined
            placeholder="this is a Simple video that teaches how to.."
          ></v-text-field>
          </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" xs="12" sm="6" lg="6">
            <v-file-input
            outlined
            @change="getStreams"
            v-model="file"
            show-size
            counter
            label="Upload here :)"
          ></v-file-input>
          </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="6">
            <v-btn rounded class="secondary" dark @click="getFiles">Upload</v-btn>
          </v-col>  
          </v-row>
        </v-col>
          </v-row>
      </v-slide-y-transition>
          <v-slide-y-reverse-transition mode="out-in" hide-on-leave="">

         
          <v-row v-if="!upload" justify="center text-center">
            <v-col cols="4">
              <h1 class="mt-6 mb-5">Search For Tutorials 🧐</h1>
          <v-text-field
            class="mt-3"
            label="Video Title"
            placeholder="How to install windows.."
            filled
            rounded
            dense
            v-model="search"
            @input="searchVideo"
          ></v-text-field>
            </v-col>
          </v-row>
          </v-slide-y-reverse-transition>
          <!-- <video v-for="(v,i) in videos" v-bind:key="i" class="mt-6" controls width="520" :src="video">
          <source v-if="files" type="video/mp4" :src="v">
          </video>-->
          <v-slide-x-transition mode="out-in" hide-on-leave="">
      <v-row v-show="search=='' &&!upload ">
        <v-col l cols="12">
          <v-row align="center">
            
            <v-col cols="3" v-for="(v,i) in videos" v-bind:key="i">
              <v-card hover shaped max-width="344" class="mx-auto">
                <v-list-item>
                  <v-list-item-avatar color="grey"></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{v.title}}</v-list-item-title>
                    <v-list-item-subtitle>by {{v.author}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <video v-bind:key="i" class="mt-6" width="100%">
          <source v-if="v.file" type="video/mp4" :src="v.file">
          </video>
                <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img> -->

                <v-card-text>{{v.description}}</v-card-text>

                <v-card-actions>
                  <v-btn :to="{name: 'VideoDetails', params:{id: v.id, video: v}}" text color="deep-purple accent-4">Details</v-btn>
                  <v-btn text color="deep-purple accent-4">Donate</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

          </v-row>
        </v-col>
      </v-row>
      </v-slide-x-transition>
      <v-slide-x-transition mode="out-in" hide-on-leave="">
      <v-row v-show="search && !upload">
        <v-col l cols="12">
          <v-row>
            <v-col cols="4" v-for="(v,i) in searchVideos" v-bind:key="i">
              <v-card max-width="344" class="mx-auto">
                <v-list-item>
                  <v-list-item-avatar color="grey"></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">{{v.title}}</v-list-item-title>
                    <v-list-item-subtitle>by {{v.author}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <video v-bind:key="i" class="mt-6" controls width="100%" height="200">
          <source v-if="v.file" type="video/mp4" :src="v.file">
          </video>
                <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img> -->
                <v-card-text>{{v.description}}</v-card-text>
                <v-card-actions>
                  <v-btn :to="v.link" text color="deep-purple accent-4">Details</v-btn>
                  <v-btn text color="deep-purple accent-4">Donate</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

          </v-row>
        </v-col>
      </v-row>
      </v-slide-x-transition>
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      upload:false,
      file: null,
      videos: [],
      searchVideos:[],
      title:'',
      description:'',
      author:'',
      search: '',
      modal: false,
      currentVideo: null
    };
  },
  methods: {
    toggleUpload(){
      this.upload = !this.upload
    },
    getStreams() {},
    getFiles() {
      const id = this.videos.length+1
      const video ={
        id: id,
        link: `/VideoDetails/${id}`,
        file: URL.createObjectURL(this.file),
        author: this.author,
        title: this.title,
        description: this.description
      }
      this.videos.push(video);
    },
    searchVideo() {
      this.searchVideos = []
      console.log(this.videos)
      let videos = []
      this.videos.forEach( v => {
        if(v.description.search(this.search) > -1)
        this.searchVideos.push(v)
      })
      console.log(videos)
    }
  }
};
</script>
