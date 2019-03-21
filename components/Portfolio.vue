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
    <div id="section0" class="slide text-xs-center">
    <v-container>
      <h1 class="ses_headline">Porto 1</h1>
      <p class="font-weight-light white--text subtitle mb-2">South-East Asia's Most Energy Efficient Building</p>
      </v-container>
    </div>


  <!-- Portfolio 2 -->
  <div class="slide ses_coverpageporto text-xs-center" id="section0">
  <div id="videocontainer" >
    <v-container class="ses_portoitem">
      <h1 class="ses_headline">Universitas Multimedia Nusantara</h1>
      <p class="font-weight-light white--text subtitle mb-2">South-East Asia's Most Energy Efficient Building</p>
    <video id="myVideo2" loop muted data-autoplay>
      <source src="/video/video2.mp4" type="video/mp4">
      <source src="/video/video2.webm" type="video/webm">
    </video>
    </v-container>
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
  position:relative;
}

#myVideo2 {
  right:0;
  position:absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: center center;
  background-size: cover;
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
