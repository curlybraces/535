<template>
<no-ssr>
  <div>
    <full-page ref="fullpage" id="fullpage">

      <div class="section ses_aboutpage text-xs-center">
          <v-container>
          <h1 class="ses_headline">About</h1>
          <h2 class="ses_subheadline">Synergy Efficiency Solutions is a company founded on the principles of integrity and loyalty. We pride ourselves in our world-class energy solutions and the success we achieve for our clients ...</h2>
          </v-container>
      </div>
      <div class="section">
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                  <h1>STORY</h1>
              </v-flex>
              <v-flex xs12>
              <scrollable-container>
                <p class="">Synergy Efficiency Solutions is a company founded on the principles of integrity and loyalty. We pride ourselves in our world-class energy solutions and the success we achieve for our clients. By combining our expert energy engineers with the latest technologies and concepts for building optimization, our mission is to build the energy efficiency market through the continuous improvement of existing facilities and the
              creation of efficient, sustainable, new buildings. Our objective is to drive and develop the energy efficiency market in Asia Pacific. In a region experiencing soaring energy prices due to drastic cuts to energy subsidies and increasing energy demand, we strive to create solutions
              for our clients that help them remain competitive. We improve existing buildings by performing highly detailed Energy Audits that provide effective savings opportunities. Synergy Efficiency Solutions assists companies in the implementation of savings solutions by minimizing
              investment costs through our ESCO financing options.</p>
              </scrollable-container>
              </v-flex>
            </v-layout>
          </v-container>
      </div>
    </full-page>
  </div>
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
.ses_aboutpage {
  background-image: url('/img/about01.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}

.ses_aboutpage .blank {
  background-color: white;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}


.ses_aboutpage .ses_headline {
  font-size: 40px;
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

.ses_aboutpage .ses_subheadline {
  font-weight: 700;
  text-transform: normal;
  font-size: 18px;
  color: #eee;
}


.ses_aboutpage .swipe {
  font-weight: 900;
  font-size: 12px;
  color: #eee;
  position: absolute;
  bottom: 40px;
  padding-left: 196px;
}

.ses_aboutpage .formore {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 25px;
  color: #eee;
  position: absolute;
  bottom: 60px;
  padding-left: 196px;
}


#more {
  color: #eeeeee;
}

.about #more,
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

.ses_middleone #more {
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

.ses_middleone #moretop {
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

.ses_aboutpage .sesheadline {
  font-size: 55px;
  padding-bottom: 10px;
  width: 80%;
  margin: 0 auto 0;
}

.story {
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
}

.ses_aboutpage .sesheadlineblue {
  font-size: 55px;
  color: #0047b3;
  padding-bottom: 30px;
  width: 80%;
  margin: 0 auto 0;
}

.about #more,
.ses_middleone #more .headline-more,
.intro #more .headline-more {
  color: #222;
}

.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}

.about {
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
