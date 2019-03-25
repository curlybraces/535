<template>
<div>

  <!-- Portfolio Index -->
  <div class="slide ses_coverportfolio text-xs-center">
    <v-container>
      <h1 class="ses_headline">Portfolio</h1>
      <h2 class="ses_subheadline">More</h2>
    </v-container>
  </div>


    <!-- Portfolio 1 -->

      <div class="slide" id="section0">
    		<video id="myVideo" loop muted data-autoplay>
    			<source src="/video/video1.mp4" type="video/mp4">
    			<source src="/video/video1.webdm" type="video/webm">
    		</video>
    		<div class="layer">
        <h1 class="ses_headline">Portfolio 1 Title</h1>
        <h2 class="ses_subheadline">More</h2>
    		</div>
    	</div>

      <!-- Portfolio 2 -->

      <div class="slide" id="section0">
      		<video id="myVideo" loop muted data-autoplay>
      			<source src="/video/video2.mp4" type="video/mp4">
      			<source src="/video/video2.webm" type="video/webm">
      		</video>
      		<div class="layer">
          <h1 class="ses_headline">Portfolio 2 Title</h1>
          <h2 class="ses_subheadline">More</h2>
      		</div>
      </div>

      <!-- Portfolio 3 -->

        <div class="slide" id="section0">
      		<video id="myVideo" loop muted data-autoplay>
      			<source src="/video/video3.mp4" type="video/mp4">
      			<source src="/video/video3.webdm" type="video/webm">
      		</video>
      		<div class="layer">
          <h1 class="ses_headline">Portfolio 3 Title</h1>
          <h2 class="ses_subheadline">More</h2>
      		</div>
      	</div>


      <!-- Portfolio 4 -->

      <div class="slide" id="section0">
      		<video id="myVideo" loop muted data-autoplay>
      			<source src="/video/video4.mp4" type="video/mp4">
      			<source src="/video/video4.webm" type="video/webm">
      		</video>
      		<div class="layer">
          <h1 class="ses_headline">Portfolio 4 Title</h1>
          <h2 class="ses_subheadline">More</h2>

      		</div>
      </div>



</div>
</template>

<script>

</script>

<style>

.section{
  text-align:center;
  overflow: hidden;
}

#myVideo{
  position: absolute;
  right: 0;
  bottom: 0;
  top:0;
  right:0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-color: black; /* in case the video doesn't fit the whole page*/
    background-image: /* our video */;
    background-position: center center;
    background-size: contain;
    object-fit: cover; /*cover video background */
    z-index:3;
}

#section0 .layer{
  position: absolute;
  z-index: 4;
  width: 100%;
  left: 0;
  top: 43%;
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}


#section0{
  overflow: hidden;
  position:relative;
}

video::-webkit-media-controls {
  display:none !important;
}

.layer .ses_headline {
  font-size: 45px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  padding-top: 0px;
  padding-bottom: 10px;
  color: #eeeeee;
  text-shadow: 2px 2px 2px #444;
  z-index: 99;
}

.ses_coverportfolio .ses_subheadline, .layer .ses_subheadline {
  font-weight: 400;
  font-size: 18px;
  color: #eee;
  text-align: center;
}


</style>
