<template lang="html">
  <div>
  <full-page ref="fullpage" id="fullpage">

  <div class="section">


    <!-- Portfolio Index -->
    <div class="slide ses_coverportfolio text-xs-center">
      <v-container>
        <h1 class="ses_headline">Portfolio</h1>
        <h2 class="ses_subheadline">More</h2>
      </v-container>
    </div>


      <!-- Portfolio 1 -->

        <div class="slide" id="section0">

            <div class="section">

          		<video id="myVideo" loop muted data-autoplay>
          			<source src="/video/video1.mp4" type="video/mp4">
          			<source src="/video/video1.webdm" type="video/webm">
          		</video>
          		<div class="layer">
                <h1 class="ses_headline">Portfolio 1 Title</h1>
                <h2 class="ses_subheadline">More</h2>
          		</div>

            </div>
            <div class="section">

          		<video id="myVideo" loop muted data-autoplay>
          			<source src="/video/video1.mp4" type="video/mp4">
          			<source src="/video/video1.webdm" type="video/webm">
          		</video>
          		<div class="layer">
                <h1 class="ses_headline">Portfolio 1 Title</h1>
                <h2 class="ses_subheadline">More</h2>
          		</div>

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
}

/* Style for our header texts
	* --------------------------------------- */
	h1 {
		color: #fff;
		margin:0;
		padding:0;
	}
	/* Centered texts in each section
	* --------------------------------------- */
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
	/* Layer with position absolute in order to have it over the video
	* --------------------------------------- */
	#section0 .layer{
		position: absolute;
		z-index: 4;
		width: 100%;
		left: 0;
		top: 43%;
		/*
		* Preventing flicker on some browsers
		* See http://stackoverflow.com/a/36671466/1081396  or issue #183
		*/
		-webkit-transform: translate3d(0,0,0);
		-ms-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	/*solves problem with overflowing video in Mac with Chrome */
	#section0{
		overflow: hidden;
    position:relative;
	}
	/* Bottom menu
	* --------------------------------------- */
	#infoMenu li a {
		color: #fff;
	}
	/* Hiding video controls
	* See: https://css-tricks.com/custom-controls-in-html5-video-full-screen/
	* --------------------------------------- */
	video::-webkit-media-controls {
	  display:none !important;
	}
	</style>
