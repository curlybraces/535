<template>
<no-ssr>
  <div>
  <full-page ref="fullpage" id="fullpage" >
          <div class="section aboutpage">

            <div class="slide middleone text-xs-center">
                <h1 class="sesheadline">About</h1>
                <h2 class="formore">More</h2>
                <h4 class="swipe"><-- swipe --></h4>
              <v-container>
                <div id="moretop">
                  <div class="headline-more">

                  </div>
                </div>

              <div id="more">
                <div class="headline-more">

                </div>
              </div>
            </v-container>
          </div>

          <div class="section blank">
            <div class="slide middletwo text-xs-center">
              <h1 class="sesheadlineblue">STORY</h1>
              <v-container>
                <div id="moretop">
                  <div class="headline-more">
                    <p class="story">Synergy Efficiency Solutions is a company founded on the principles of integrity and loyalty. We pride ourselves in our world-class energy solutions and the success we achieve for our clients.
                        By combining our expert energy engineers with the latest technologies and concepts for building optimization, our mission is to build the energy efficiency market through the continuous improvement of existing facilities and the creation of efficient, sustainable, new buildings.
                        Our objective is to drive and develop the energy efficiency market in Asia Pacific. In a region experiencing soaring energy prices due to drastic cuts to energy subsidies and increasing energy demand, we strive to create solutions for our clients that help them remain competitive.
                        We improve existing buildings by performing highly detailed Energy Audits that provide effective savings opportunities. Synergy Efficiency Solutions assists companies in the implementation of savings solutions by minimizing investment costs through our ESCO financing options.
                    </p>
                  </div>
                </div>

                <div id="more">

                </div>
            </v-container>
          </div>
        </div>
      </div>

      </full-page>
  </div>
  </v-layout>
  </no-ssr>
</template>
<script>
import Particles from '~/components/Particles.vue'

export default {
  layout: 'front',
  components: {
    Particles
  }
}

</script>
<style>
.aboutpage .middleone {
  background-image: url('/img/02home-about.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.aboutpage .blank{
  background-color: white;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.splash::after {
  background-image: linear-gradient(to top, transparent 0%, black 170%);
  height: 500px;
  margin-top:0px;
  content: '';
  position:absolute;
  display:block;
  width:100%;
}
.aboutpage .sesheadline {
  font-size:20px;
  font-weight:900;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  padding-top: 0px;
  padding-bottom:10px;
  color: #eeeeee;
  text-shadow: 2px 2px 2px #444;
  z-index: 99;
}
.aboutpage .swipe {
  font-weight:900;
  font-size: 12px;
  color:#eee;
  position: absolute;
  bottom: 40px;
  padding-left: 196px;
}

.aboutpage .formore {
  font-weight:900;
  text-transform: uppercase;
  font-size: 25px;
  color:#eee;
  position: absolute;
  bottom: 60px;
  padding-left: 196px;
}

.aboutpage .sessubheadline {
  font-weight:900;
  text-transform: uppercase;
  font-size:18px;
  color:#eee;
  text-align:center;
}
#more {
  color: #eeeeee;
}
.about #more, .splash #more, .intro #more {
  position:absolute;
  top:85%;
  margin:0 auto 0;
  width:100%;
  text-align:center;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.middleone #more {
  position:absolute;
  bottom:0;
  top:90%;
  width:33%;
  margin:0 auto 0;
  text-align:center;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.middleone #moretop {
  position:absolute;
  bottom:0;
  top:15%;
  width:30%;
  margin:0 auto 0;
  text-align:center;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.aboutpage .sesheadline {
  font-size:55px;
  padding-bottom:10px;
  width:80%;
  margin:0 auto 0;
}

.story {
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
}

.aboutpage .sesheadlineblue {
  font-size:55px;
  color: #0047b3;
  padding-bottom:30px;
  width:80%;
  margin:0 auto 0;
}

.about #more, .middleone #more .headline-more, .intro #more .headline-more {
  color:#222;
}
.fp-controlArrow.fp-prev,.fp-controlArrow.fp-next {
  display:none;
}
.about {
  background:#fff;
}


#particles {
  z-index: 9;
  position:absolute;
  width:100%;
  height:auto;
  display:block;
}
</style>
