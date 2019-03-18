<template>
<no-ssr>
  <div>
    <full-page ref="fullpage" id="fullpage">
      <div class="section updates">

        <div class="slide middleone text-xs-center">
          <h1 class="sesheadline">UPDATES</h1>
          <h2 class="formore">More</h2>
          <h4 class="swipe">
            <-- swipe -->
          </h4>
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
            <h1 class="sesheadlineblue">UPDATES</h1>
            <v-container>
              <div id="moretop">
                <div class="headline-more">
                  <v-container grid-list-md text-xs-center>
                    <v-layout row wrap>

                      <v-flex xs12>
                        <v-card dark color="primary">
                          <v-card-text class="px-0">Foto 1</v-card-text>
                        </v-card>
                      </v-flex>

                      <v-flex xs12>
                        <v-card dark color="primary">
                          <v-card-text class="px-0">Foto 2</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex xs12>
                        <v-card dark color="primary">
                          <v-card-text class="px-0">Foto 3</v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
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
.updates .middleone {
  background-image: url('/img/work.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.updates .blank {
  background-color: white;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.splash::after {
  background-image: linear-gradient(to top, transparent 0%, black 170%);
  height: 500px;
  margin-top: 0px;
  content: '';
  position: absolute;
  display: block;
  width: 100%;
}

.updates .sesheadline {
  font-size: 20px;
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

.updates .sessubheadline {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 18px;
  color: #eee;
  text-align: center;
}

#more {
  color: #eeeeee;
}

.updates #more,
.splash #more,
.intro #more {
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

.middleone #more {
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

.middleone #moretop {
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

.updates .sesheadline {
  font-size: 55px;
  padding-bottom: 10px;
  width: 80%;
  margin: 0 auto 0;
}

.updates .sesheadlineblue {
  font-size: 55px;
  color: #0047b3;
  padding-bottom: 50px;
  width: 80%;
  margin: 0 auto 0;
}

.updates .swipe {
  font-weight: 900;
  font-size: 12px;
  color: #eee;
  position: absolute;
  bottom: 60px;
  padding-left: 196px;
}

.updates .formore {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 25px;
  color: #eee;
  position: absolute;
  bottom: 70px;
  padding-left: 196px;
}

.updates #more,
.middleone #more .headline-more,
.intro #more .headline-more {
  color: #222;
}

.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}

.updates {
  background: #fff;
}


#particles {
  z-index: 9;
  position: absolute;
  width: 100%;
  height: auto;
  display: block;
}
</style>
