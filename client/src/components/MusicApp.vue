
<template>
<div class="Music-App-container">
    <b-container class="main-wrapper" fluid>
      <div class="left-container">
        
        <section class="music-app-header">
          <b-container class="col-12 music-app" cols="1">
            <b-row>
              <b-col><h2 class="application-title">Music App</h2></b-col>
            </b-row>
           </b-container>
        </section>
    
      <!-- Music Section -->
      <section id="container Music-section">
          <!-- left 1 column  --> 
          <b-container class="col-1-row-1" fluid>

          <b-row  class="title-container">
            <b-col> <h2 class="music-header">Music</h2> </b-col>
          </b-row>

          <b-row class="left-border" cols="1">

            <b-col><button class="item btn">Explore</button></b-col>
            <b-col><button class="item btn">Browse</button></b-col>
            <b-col><button class="item btn">Search</button ></b-col>

          </b-row>

         </b-container>

      </section>

      <!-- Library section -->
      <section id="Library-Section">
        <!-- 1 column 1 row -->
        <b-container class="col-1-row-1" fluid>

          <b-row class="title-container">
           <h2 class="library-header">Library</h2>
          </b-row>

          <b-row class="left-border" cols="1">

            <b-col><button class="item btn">Recently Added</button></b-col> 
            <b-col><button class="item btn">Artist</button></b-col> 
            <b-col><button class="item btn">Albums</button></b-col> 
            <b-col><button class="item btn">Songs</button></b-col>

          </b-row>
        <!-- End 1 column 1 row -->
        </b-container>
      <!-- End Library section -->
      </section>

      <!-- Music Player section -->
      <section id="Music-Player">
        <!-- Music Player Container -->
        <b-container class="Player-container" fluid>
          <!-- Music Player Top Container -->
          <b-container class="Music-Player-Top" fluid>
            
            <b-row class="player-img">
              <b-col><img :src="GetImg(this.current)" alt="#"></b-col>
            </b-row>

            <b-col class="data-container">

              <b-row>
                <b-col> <p class="song-title">{{this.current.title}} - </p> </b-col>
              </b-row>

              <b-row>
                <b-col> <p class="song-artist">{{this.current.artist}}</p> </b-col>
              </b-row>

              <b-row>
                <b-col > <div class="progress"></div> </b-col>
              </b-row>

            </b-col>

          <!-- End Music Player Top Container -->
          </b-container>

          <b-container class="Music-Player-Bottom" fluid>
            <b-row align-v="center">

            <b-col><button class="btn btnPrev" @click="Prev" >Prev</button></b-col>
            <b-col v-if="!isPlaying"> <button  class="btn btnPlay" @click="play">Play</button></b-col>
            <b-col v-else ><button class="btn btnPause" @click="Pause">Pause</button></b-col>
            <b-col><button class="btn btnNext" @click="Next">Next</button></b-col>
  
            </b-row>

            <b-row class="slider-container">
              <input v-on="(Volume())" v-model="volume" class="slider" type="range" min="0" max="10" step=".05" >
            </b-row>

          </b-container>
        <!-- End Music Player Container -->
        </b-container>

      <!-- End Music Player section -->
      <!-- End Left Section -->
      </section>

      </div>
      <!-- end of wrapper, container, and Music-App-container-->

      <!-- Begin Right Section -->
      <b-container class="right-container" fluid>
        <b-container class="padding">

          <b-row class="top-container" align-h="center">

            <b-col order="1"><button class="btnSearch">Search</button></b-col>
            <b-col order="2"><input class="txtSearch" type="text" placeholder="Search Songs, Artist, title..."></b-col>
            <b-col order="3" ><button class="btnSetting">Settings</button></b-col> 

          </b-row>

        </b-container>

        <b-container class="middle">

          <b-row class="showcase-container">
            <div class="showcase-content">

            </div>
          </b-row>

          <section id="explore">

            <b-container class="explore-container">

              <button @click="btnShowMoreExplore" :disabled="this.currentPageExplore == this.totalPages">Show more</button>
              <button @click="btnShowLessExplore" :disabled="this.currentPageExplore > totalPages || this.currentPageExplore == 0" >ShowLess</button>
              <h2 class="explore-header">Explore</h2>

              <b-row class="card col-4-row-1" v-for="song in ToBeShownExplore" :key="song.src" align-h="center" align-v="center">
                <b-row> <img :src="GetImg(song)" :alt="song.title + 'cover' " class="card-item music-cover"> </b-row>
                <b-row> <p class="card-item card-title">{{song.title}}</p> </b-row>
                <b-row> <p class="card-item card-artist">{{song.artist}}</p> </b-row>
                <b-col> <button @click="btnPlay(song,index)" class="card-item btn-explore-Play">Play</button> </b-col>
              </b-row>

            </b-container>

          </section>
               
              <b-container class="row-1-column-2" fluid>
                
                <b-row class="row">

                  <section id="genre-section">
                    <b-container class="genre-container genre-table" fluid>     
                          
                      <b-row class="genre-row" align-h="center">

                        <b-col style="genre-cell"> <h3 class="genre-header">Genre</h3> </b-col>

                        <b-col class="genre-cell"> <button class="btnRock" >Rock</button> </b-col>
                        <b-col class="genre-cell"> <button class="btnPop">Pop</button> </b-col>
                        <b-col class="genre-cell"> <button class="btnDance">Dance</button> </b-col>
                        <b-col class="genre-cell"> <button class="btnCountry">Country</button> </b-col>
                        <b-col class="genre-cell"> <button class="btnAnime">Anime</button> </b-col>
                        <b-col class="genre-cell"> <button class="btnRock-N-Roll">Rock-N-Roll</button> </b-col>
                        <b-col class="genre-cell"> <button class="btnJazz">Jazz</button> </b-col>
                        <b-col class="genre-cell"> <button class="btnRapp">Rapp</button> </b-col>

                        </b-row>

                    </b-container>

                  </section>
                </b-row>

                <b-row class="row">

                  <section id="artist-section">
                      <b-container class="artist-container">
                        <h2 class="artist-header">Artist</h2>

                        <button @click="ShowMore" :disabled="this.currentPage == this.totalPages">Show more</button>
                        <button @click="ShowLess" :disabled="currentPage > totalPages || this.currentPage == 0" >ShowLess</button>

                        <b-container class="artist-cards-container">
                            <button v-for="song in ToBeShown" :key="song.src" @click="btnPlay(song)" class="artist-card  btn-artist-Play" :class=" (song.src == current.src) ? 'song playing' : 'song' ">
                              <img :src="GetImg(song)" :alt="song.title + 'cover' " class="artist-card-item artist-cover">
                              <p class="artist-card-item card-title">{{song.title}}</p>
                              <p class="artist-card-item card-artist">{{song.artist}}</p>
                            </button>
                        </b-container>

                      </b-container>
                    </section>

                </b-row>

              </b-container>

        </b-container>

        <div class="footer">
          <p>Author: Dominic Gaona, Version: 1.1, Date Modified: 10/10/20</p>
        </div>

      </b-container>

    </b-container>
  </div>
</template>

<script>
import DataService from '../DataService';
export default {
  name: 'MusicApp',
  data() {
    return{
 index: 0,
      current: {},
      curIndex : 0,
      track: [],

      player: new Audio(),
      isPlaying: false,
      volume: 5.0,
      musicDuration: 0,
        
      currentPage: 0,
      lastCard: 0,
      curCard: 4,

      currentPageExplore: 0,
      lastCardExplore: 0,
      curCardExplore: 4,
      error: ''
    }
  },
  async created() {
    try {
      this.track = await DataService.getMusic();
    } catch (error) {
      this.err = error.message;
    }
      this.current = this.track[this.index];
      this.player.src = require(`../assets/music/${this.current.src}`); 
      //this.current.src;
      //alert(this.player.src);
      //alert(this.track.imgsrc);
      console.log("Track length: " + this.track.length);
  }, 
   methods: {
    Volume () {
      this.player ? this.player.volume = (this.volume / 10) : null; 
    },

      GetImg : function(song){
      return require(`../assets/${song.imgsrc}`);
    },

    play(song) { 
      //alert("song: " + song.title);
      if(typeof song.src != "undefined" ){
        this.current = song;
        alert("Play: " + this.current.src);
        this.player.src = require(`../assets/music/${this.current.src}`);
      }
      this.player.play();
      this.isPlaying = true;

    },
    btnPlay : function(song) {
      
      if(typeof song.src != "undefined"){
        this.current = song;
        this.index = this.current.id;
        //console.log("index " + this.current.id); 
        this.player.src = require(`../assets/music/${this.current.src}`);
      }
      this.player.play();
      this.isPlaying = true;
    },

    Pause () {
      this.player.pause();
      this.isPlaying = false;
    },

    Next () {
      this.index++;
      //console.log("index " + this.curIndex);
      if(this.index > this.track.length - 1){
        this.index = 0;
      }
      this.current = this.track[this.index];
      this.play(this.current);

    },
    Prev () {
      this.index--;
      if(this.index < 0){
        this.index = this.track.length - 1;
      }
      this.current = this.track[this.index];
      this.play(this.current);
    },

    ShowMore() {
      if(this.currentPage < this.totalPages){

        this.currentPage++;
        this.lastCard += 4;
        this.curCard = this.lastCard + 4;
        console.log("Show More");
        console.log("currentPage: " + this.currentPage);
        console.log("TotalPages: " + this.totalPages);
        //console.log("Last Card: " + this.lastCard);
        //console.log("CurrentCard: " + this.curCard);
      }
    },

    ShowLess() {
        if(this.currentPage <= this.totalPages && this.currentPage != 0){
        this.currentPage--;
        this.lastCard -= 4;
        this.curCard = this.curCard - 4;
        console.log("Show Less");
        console.log("show less currentPage: " + this.currentPage);
        console.log("TotalPages: " + this.totalPages);
        
        //console.log("Last Card: " + this.lastCard);
        //console.log("CurrentCard: " + this.curCard);
      }
    },      
    btnShowMoreExplore : function() {
      if(this.currentPage < this.totalPages){

        this.currentPageExplore++;
        this.lastCardExplore += 4;
        this.curCardExplore = this.lastCardExplore + 4;
        console.log("Show Explore More");
        console.log("currentPage: " + this.currentPageExplore);
        console.log("TotalPages: " + this.totalPagesExplore);
        //console.log("Last Card: " + this.lastCardExplore);
        //console.log("CurrentCard: " + this.curCardExplore);
      }
    },

    btnShowLessExplore : function() {
        if(this.currentPageExplore <= this.totalPages && this.currentPageExplore != 0){
        this.currentPageExplore--;
        this.lastCardExplore -= 4;
        this.curCardExplore = this.curCardExplore - 4;
        console.log("Show Less");
        console.log("show less currentPage: " + this.currentPageExplore);
        console.log("TotalPages: " + this.totalPagesExplore);
        
        //console.log("Last Card: " + this.lastCard);
        //console.log("CurrentCard: " + this.curCard);
      }
    },  

  },

  computed: {

    ToBeShown() {
      //console.log("currentpage " + this.currentPage);
      return this.track.slice(this.lastCard, this.curCard);
    },
    ToBeShownExplore() {
      //console.log("currentpage " + this.currentPage);
      return this.track.slice(this.lastCardExplore, this.curCardExplore);

    },

    totalPages() {
      return Math.ceil(this.track.length / 4) - 1;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/style.css"></style>
