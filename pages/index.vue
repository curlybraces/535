<template>
<no-ssr>
  <div>
    <full-page ref="fullpage" id="fullpage">
      <div id="ses_particles">
        <particles />
      </div>
      <div class="section ses_splash">
        <v-container>
          <h1 class="ses_headline">Enginering the Future, Today</h1>
          <h2 class="ses_subheadline">We Are Synergy Efficiency Solutions</h2>
        </v-container>
        <div id="ses_more">
          <div class="ses_headline-more">
            <span class="hidden-sm-and-down"><i class="fas fa-3x fa-chevron-down"></i><br>SCROLL DOWN</span>
            <span class="hidden-sm-and-up"><i class="fas fa-3x fa-chevron-up"></i><br>SWIPE UP</span>
          </div>
        </div>
      </div>
      <div class="section ses_intro text-xs-center">
        <v-container>
          <img src="/img/favicon.png" width="200px" />
          <p>We shifted gears since 2018 and focused more on what we could do to reduce the energy usage in buildings.</p>
          <p>We understand that now, more than ever, businesses and other enterprises across every industry are looking for new innovative ways to cut costs.</p>
        </v-container>
        <div id="ses_more">
          <div class="ses_headline-more">
            <i class="fas fa-2x fa-chevron-up"></i>
          </div>
        </div>
      </div>
      <div class="section ">
        <div class="slide ses_middleone text-xs-center">
          <v-container>
            <img src="http://www.synergyefficiency.solutions/images/home/Icons/ESCOFinancing.png" /><br><br>
            <h2 class="ses_subheadline">You can save your and money without putting any money up front!</h2>
          </v-container>
          <div id="ses_more">
            <div class="ses_headline-more">
              <nuxt-link to="/about" class="ses_link"><i class="fas fa-1x fa-chevron-right"></i> Swipe</nuxt-link>
            </div>
          </div>
        </div>
        <div class="slide ses_middleone text-xs-center">
          <v-container>
            <img src="http://www.synergyefficiency.solutions/images/Benefits/building-comfort.png" />
            <h1 class="ses_headline">You Can Increase the Comfort Levels in Your building</h1>
          </v-container>
          <div id="ses_more">
            <div class="ses_headline-more">
            <nuxt-link to="/about" class="ses_link"><i class="fas fa-1x fa-chevron-right"></i> Swipe</nuxt-link>
            </div>
          </div>
        </div>
        <div class="slide ses_middleone text-xs-center">
          <v-container>
            <img src="http://www.synergyefficiency.solutions/images/home/Icons/LEEDCertified.png" />
            <h1 class="ses_headline">Get LEED/EDGE certified</h1>
          </v-container>
          <div id="ses_more">
            <div class="ses_headline-more">
            <nuxt-link to="/about" class="ses_link"><i class="fas fa-1x fa-chevron-right"></i> Swipe</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
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
.ses_splash {
  background-image: url('/img/home.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.ses_middleone,
.ses_intro {
  background-color: #e5e5e5;
  background-image: url('http://www.synergyefficiency.solutions/templates/rt_epsilon/images/patterns/poly2.png');
  background-position: center top;
  background-repeat: repeat;
}

.ses_splash::after {
  background-image: linear-gradient(to top, transparent 0%, black 170%);
  height: 500px;
  margin-top: 0px;
  content: '';
  position: absolute;
  display: block;
  width: 100%;
}

.ses_splash .ses_headline {
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

.ses_splash .ses_subheadline {
  font-weight: 400;
  font-size: 18px;
  color: #eee;
  text-align: center;
}

#ses_more {
  color: #eeeeee;
}

.about #ses_more,
.ses_splash #ses_more,
.ses_intro #ses_more {
  position: absolute;
  top: 85%;
  margin: 0 auto 0;
  width: 100%;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.ses_middleone #ses_more {
  position: absolute;
  bottom: 0;
  top: 90%;
  width: 33%;
  margin: 0 auto 0;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.ses_middleone #ses_moretop {
  position: absolute;
  bottom: 0;
  top: 15%;
  width: 30%;
  margin: 0 auto 0;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.ses_middleone .ses_headline {
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  width: 80%;
  margin: 0 auto 0;
}

.about #ses_more,
.ses_middleone #ses_more .ses_headline-more,
.ses_intro #ses_more .ses_headline-more {
  color: #222;
}

.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}

.about {
  background: #fff;
}


#ses_particles {
  z-index: 9;
  position: absolute;
  width: 100%;
  height: auto;
  display: block;
}

.ses_link {
  text-decoration:none;
  color:#333;
  }
</style>
