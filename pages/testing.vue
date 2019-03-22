<template lang="html">
  <div>
  <full-page ref="fullpage" :options="options" id="fullpage">
  	<div class="section">

    <!-- Portfolio Index -->
    <div class="slide ses_coverportfolio text-xs-center">
      <v-container>
        <h1 class="ses_headline">Portfolio</h1>
        <h2 class="ses_subheadline">More</h2>
      </v-container>
    </div>

    <div id="section0">
      <div class="slide">

          <video loop muted data-autoplay>
      			<source src="/video/video1.mp4" type="video/mp4">
      			<source src="/video/video1.webm" type="video/webm">
      		</video>
        </div>
      </div>

        <div id="section0">
        <div class="slide">
          <video loop muted data-autoplay>
      			<source src="/video/video2.mp4" type="video/mp4">
      			<source src="/video/video2.webm" type="video/webm">
      		</video>
        </div>
      </div>

        <div id="section0">
        <div class="slide">
          <video loop muted data-autoplay>
      			<source src="/video/video3.mp4" type="video/mp4">
      			<source src="/video/video3.webm" type="video/webm">
      		</video>
        </div>
      </div>

  	</div>
  </full-page>
  </div>
</template>

<script>
export default {
  layout: 'front'
}
</script>

<style>
.ses_coverportfolio {
  background-image: url('/img/portfolio.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #f0f0f0;
  }

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

	#section0 {
		overflow: hidden;
	}
	video::-webkit-media-controls {
	  display:none !important;
	}
	</style>
