<template>
<no-ssr>
  <div>
  <full-page ref="fullpage" id="fullpage" >
  <div id="particles">
    <particles />
  </div>
          <div class="section splash">
          <v-container>
              <h1 class="sesheadline">Enginering the Future, Today</h1>
              <h2 class="sessubheadline">We Are Synergy Efficiency Solutions</h2>
          </v-container>
              <div id="more">
                <div class="headline-more">
                  <i class="fas fa-3x fa-chevron-up"></i><br>SWIPE UP
                </div>
              </div>
          </div>
          <div class="section intro text-xs-center">
            <v-container>
            <img src="/img/favicon.png" width="200px"/>
            <p>We shifted gears since 2018 and focused more on what we could do to reduce the energy usage in buildings.</p>
            <p>We understand that now, more than ever, businesses and other enterprises across every industry are looking for new innovative ways to cut costs.</p>
            </v-container>
          </div>
          <div class="section">
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
                <img src="http://www.synergyefficiency.solutions/images/Benefits/building-comfort.png" />
                  <h1 class="sesheadline">You Can Increase the Comfort Levels in Your building</h1>
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
                <img src="http://www.synergyefficiency.solutions/images/home/Icons/LEEDCertified.png" />
                  <h1 class="sesheadline">Get LEED/EDGE certified</h1>
                  <div id="more">
                    <div class="headline-more"><i class="fas fa-1x fa-chevron-down"></i>
                    </div>
                  </div>
                </v-container>
              </div>
            </div>
            <div class="section about text-xs-center">
              <v-container>
                <v-img src="http://www.synergyefficiency.solutions/images/sestimeline.png" /><br><br>
                <p>We started our company, Synergy Carbon, in 2008. Our CEO, Steve Piro, who is passionate about the environment, wanted to make a difference in the new country he called home, Indonesia. He created a company that was primarily focused on carbon mitigation. The company grew, and two years later, we realized there was a large demand for promoting energy efficiency in the buildings of Indonesia.</p>
                <p>We shifted gears and focused more on what we could do to reduce the energy usage in buildings to save our clients money. Later in 2010 we got our first energy efficiency contract with the Kompas Gramedia Group, which, over time, has proven to be one of our leading clients.</p>
              </v-container>
            </div>
            <div class="section porto text-xs-center">
            <h1 class="sesheadline">Portfolio</h1>
              <v-container>
              <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                      <v-container grid-list-        sm fluid>
                        <v-layout row wrap>
                          <v-flex
                            v-for="n in 9"
                            :key="n"
                            xs4
                            d-flex
                          >
                            <v-card flat tile class="d-flex">
                              <v-img
                                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                aspect-ratio="1"
                                class="grey lighten-2"
                              >
                                <template v-slot:placeholder>
                                  <v-layout
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                  >
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                  </v-layout>
                                </template>
                              </v-img>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-flex>
                  </v-container>
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
  background-image: url('/img/home.jpg');
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
