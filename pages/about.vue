<template>
<no-ssr>
  <div>
  <full-page ref="fullpage" id="fullpage" >

          <div class="section splash">
          <v-container>
              <h1 class="sesheadline">About</h1>
          </v-container>
              <div id="more">
                <div class="headline-more">
                  <i class="fas fa-3x fa-chevron-up"></i><br>SWIPE UP
                </div>
              </div>
          </div>
          <div class="section splash">
              <div class="slide middleone text-xs-center">
                <v-container>
                <div id="moretop">
                <div class="headline-more"><i class="fas fa-1x fa-chevron-left"> Swipe </i> <i class="fas fa-1x fa-chevron-right"></i>
                  </div>
                </div>
                <img src="http://www.synergyefficiency.solutions/images/home/Icons/ESCOFinancing.png" /><br><br>
                  <h2 class="sessubheadline">You can save your and money without putting any money up front!</h2>
                  <div id="more">
                    <div class="headline-more"><i class="fas fa-1x fa-chevron-down"></i>
                    </div>
                  </div>
                </v-container>
              </div>

              <div class="slide middleone text-xs-center">
                <v-container>
                <div id="moretop">
                <div class="headline-more"><i class="fas fa-1x fa-chevron-left"> Swipe </i> <i class="fas fa-1x fa-chevron-right"></i>
                  </div>
                </div>
                <img src="http://www.synergyefficieABOUT

Sncy.solutions/images/home/Icons/LEEDCertified.png" />
                  <h1 class="sesheadline">Get LEED/EDGE certified</h1>
                  <div id="more">
                    <div class="headline-more"><i class="fas fa-1x fa-chevron-down"></i>
                    </div>
                  </div>
                </v-container>
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
.splash {
  background-image: url('/img/02home-about.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.middleone, .intro {
  background-color:#e5e5e5;
  background-image: url('http://www.synergyefficiency.solutions/templates/rt_epsilon/images/patterns/poly2.png');
  background-position: center top;
  background-repeat: repeat;
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
.splash .sesheadline {
  font-size:45px;
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
.splash .sessubheadline {
  font-weight:400;
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

.middleone .sesheadline {
  font-size:20px;
  padding-top:20px;
  padding-bottom:10px;
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
