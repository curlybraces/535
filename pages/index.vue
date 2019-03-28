<template>
<no-ssr>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">

      <!-- Particles -->
      <div id="ses_particles">
        <particles />
      </div>

      <!-- Splash -->
      <div id="splashnav" class="section ses_splash ses_coverhome">
        <Splash />
      </div>

      <!-- About -->
      <div id="aboutnav" class="section">
        <About />
      </div>

      <!-- Services -->
      <div id="servicesnav" class="section">
        <Services />
      </div>

      <!-- Portfolio -->
      <div id="portoflionav" class="section">
        <Portfolio />
      </div>

      <!-- Blog -->
      <div id="blognav" class="section">
        <Blog />
      </div>

      <!-- FAQ -->
      <div id="faqnav" class="section">
        <Faq />
      </div>

      <!-- Career -->
      <div id="careernav" class="section">
        <Career />
      </div>

      <!-- Footer  -->
      <div class="section fp-auto-height" id="section2">
        <Footer />
      </div>

    </full-page>
  </div>
</no-ssr>
</template>
<script>
import Particles from '~/components/Particles.vue'
import Splash from '~/components/Splash.vue'
import About from '~/components/About.vue'
import Services from '~/components/Services.vue'
import Portfolio from '~/components/Portfolio.vue'
import Resource from '~/components/Resource.vue'
import CaseStudy from '~/components/CaseStudy.vue'
import Blog from '~/components/Blog.vue'
import Faq from '~/components/Faq.vue'
import Career from '~/components/Career.vue'
import Footer from '~/components/Footer.vue'


export default {
  layout: 'front',
  components: {
    Particles,
    Splash,
    About,
    Services,
    Portfolio,
    Resource,
    CaseStudy,
    Blog,
    Faq,
    Career,
    Footer
  },
  data() {
    return {
      dialogA: false,
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollBar: false,
        normalScrollElements: '.ses_scrollable'
      }
    }
  },
  methods: {
    afterLoad() {}
  }
}
</script>
<style>

.fp-controlArrow.fp-prev,
.fp-controlArrow.fp-next {
  display: none;
}

#ses_particles {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: auto;
  display: block;
}

.ses_splash.ses_coverhome {
  background-image: url('/img/home.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
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

.ses_coverabout,
.ses_coverservices,
.ses_coverportfolio,
.ses_coverresource,
.ses_covercasestudy,
.ses_coverblog,
.ses_covercareer {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #f0f0f0;
}

.ses_coverpage {
  background-color: #e5e5e5;
  background-image: url('/img/poly2.png');
  background-position: center center;
  background-repeat: repeat;
}

#ses_more {
  color: #eeeeee;
}

.ses_link {
  text-decoration: none;
  color: #333;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
}
</style>
