<template>
<div class="section">

  <!-- Portfolio Index -->
  <div class="slide ses_coverportfolio text-xs-center">
    <v-container>
      <h1 class="ses_headline">Portfolio</h1>
      <h2 class="ses_subheadline">More</h2>
    </v-container>
  </div>

  <!-- Portfolio 1 -->
  <div class="slide ses_coverpageporto text-xs-center" id="section0">
    <v-container class="ses_portoitem">
      <h1 class="ses_headline">Universitas Multimedia Nusantara</h1>
      <p class="font-weight-light white--text subtitle mb-2">South-East Asia's Most Energy Efficient Building</p>
    </v-container>
    <div id="videocontainer">
      <video id="myVideo" loop muted data-autoplay>
        <source src="/video/video1.mp4" type="video/mp4">
        <source src="/video/video1.webm" type="video/webm">
      </video>
      </div>
  </div>

  <!-- Portfolio 2 -->
  <div class="slide ses_coverpageporto text-xs-center" id="section0">
    <v-container class="ses_portoitem">
      <h1 class="ses_headline">Universitas Multimedia Nusantara</h1>
      <p class="font-weight-light white--text subtitle mb-2">South-East Asia's Most Energy Efficient Building</p>
    </v-container>
    <div id="videocontainer">
    <video id="myVideo2" loop muted data-autoplay>
      <source src="/video/video2.mp4" type="video/mp4">
      <source src="/video/video2.webm" type="video/webm">
    </video>
    </div>
  </div>

  <!-- Portfolio 3 -->
  <div class="slide ses_coverportfolio text-xs-center">
    <v-container>
      <h1 class="ses_headline">Portfolio</h1>
      <h2 class="ses_subheadline">More</h2>
    </v-container>
  </div>

  <!-- Portfolio 4 -->
  <div class="slide ses_coverportfolio text-xs-center">
    <v-container>
      <h1 class="ses_headline">Portfolio</h1>
      <h2 class="ses_subheadline">More</h2>
    </v-container>
  </div>


</div>
</template>

<script>
export default {
  data() {
    return {
      dialogA: false,
      options: {
        normalScrollElements: '.ses_scrollable',
        verticalCentered: true,
      }
    }
  },
  methods: {
    afterLoad() {}
  }
}
</script>

<style scoped>
.ses_coverportfolio {
  z-index: 4;
}

/*solves problem with overflowing video in Mac with Chrome */
#section0 {
  overflow: hidden;
}

#videocontainer {
  position:absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: center center;
  background-size: contain;
  z-index: -1;
  }
#myVideo {
  position: relative;

}

#myVideo2 {
  position: relative;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: center center;
  background-size: contain;
  z-index: -1;
}

video::-webkit-media-controls {
  display: none !important;
}

.ses_coverpageporto {
  background-color: none;
  background-image: none;
  background-position: center center;
  background-repeat: repeat;

}

.ses_portoitem {
  color: #fff;
}
</style>
