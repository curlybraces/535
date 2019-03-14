<template>
<no-ssr>
  <div>
  <full-page ref="fullpage" id="fullpage" >
          <div class="section servicespage">

            <div class="slide middleone text-xs-center">
              <h1 class="sesheadline">Services</h1>
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
              <v-container>
                <div id="moretop">
                  <div class="headline-more">

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
export default {
  layout: 'front',
  components: {
  }
}
</script>
<style>
.servicespage .middleone {
  background-image: url('/img/services.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.servicespage .blank{
  background-color: white;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.servicespage::after {
  background-image: linear-gradient(to top, transparent 0%, black 170%);
  height: 500px;
  margin-top:0px;
  content: '';
  position:absolute;
  display:block;
  width:100%;
}
.servicespage .sesheadline {
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
.servicespage .sessubheadline {
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

.aboutpage .sesheadline {
  font-size:60px;
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

</style>
