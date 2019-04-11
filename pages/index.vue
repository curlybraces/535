<template lang="md">
<no-ssr>
  <div>
    <full-page ref="fullpage" id="fullpage" :options="options">
      <div id="ses_particles">
        <particles />
      </div>
      <div id="splashnav" class="section ses_splash ses_coverhome">
        <Splash />
      </div>
      <div id="aboutnav" class="section">
        <div class="slide ses_coverabout text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">About SES</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-angle-double-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage">
          <h1><i class="fas fa-user-friends"></i> About</h1>
          <div class="containersc">
            <v-container text-xs-left>
            <div v-html="$md.render( aboutcontent )"></div>
            <div class="back">
              <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
            </div>
            </v-container>
          </div>
        </div>
      </div>
      <div id="servicesnav" class="section">
        <div class="slide ses_coverservices text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Services</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <v-layout column>
              <v-flex>
                <h1><i class="fas fa-cubes"></i> SERVICES</h1>
                <div class="containersc">
                  <div class="box">
                    <div v-for="service in services" :key="service.id">
                    <nuxt-link :to="/service/ + service.id" tag="a" class="ses_sublink">
                        <div xs12 class="ses_serviceslist">
                          <v-card-text class="px-0"></v-card-text>
                          <img v-bind:src="'http://sesbackend.thenameisvery.com' + service.icon.url" max-width="100" />
                          <div class="ses_subtitle">{{ service.title }}</div>
                        </div>
                      </nuxt-link>
                    </div>
                    </div>
                  <div class="back">
                    <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
      <div id="portoflionav" class="section">
        <div class="slide ses_coverportfolio text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Portfolio</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <h1 class="pb-3"><i class="fas fa-folder-open"></i> Portfolio</h1>
          <div class="containersc">
            <div class="box">
              <v-container>
                  <v-layout column>
                    <v-flex xs12 py-4>
                    <div v-for="portfolio in portfolios" :key="portfolio.id">
                    <nuxt-link :to="/portfolio/ + portfolio.id" tag="a" class="ses_sublink">
                            <v-card class="mb-5" color="grey lighten-4" max-width="500">
                              <v-img v-bind:src="'http://sesbackend.thenameisvery.com' + portfolio.thumbnail.url" :aspect-ratio="16/9" />
                              </v-img>
                              <v-card-text class="pt-4" style="position: relative;">
                                <h3 class="title font-weight-bold green--text mb-2"> {{ portfolio.title }}</h3>
                              </v-card-text>
                            </v-card>
                      </nuxt-link>
                      </div>
                    </v-flex>
                  </v-layout>
                <div class="back">
                  <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                </div>
              </v-container>
            </div>
          </div>
        </div>
      </div>
      <div id="blognav" class="section">
        <div class="slide ses_coverblog text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Blog</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
          <h2 class="ses_navdown pointer" @click="$refs.fullpage.api.moveSectionDown()"><i class="fas fa-angle-down"></i></h2>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <h1 class="pb-3"><i class="fas fa-pencil-alt"></i> Blog</h1>
          <div class="containersc">
            <div class="box">
              <v-container>
                  <v-layout column>
                    <v-flex xs12>
                      <div v-for="blog in blogs" :key="blog.id">
                      <nuxt-link :to="/blog/ + blog.id" tag="a" class="ses_sublink">
                          <v-card class="mb-5" color="grey lighten-4" max-width="500">
                              <v-img v-bind:src="'http://sesbackend.thenameisvery.com' + blog.image.url" :aspect-ratio="16/9" />
                              </v-img>
                              <v-card-text class="pt-4" style="position: relative;">
                                <h3 class="title font-weight-bold green--text mb-2"> {{ blog.title }}</h3>
                              </v-card-text>
                            </v-card>
                            </nuxt-link>
                            </div>
                    </v-flex>
                  </v-layout>
                <div class="back">
                  <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                </div>
              </v-container>
            </div>
          </div>
        </div>
      </div>
      <div id="careernav" class="section">
        <div class="slide ses_covercareer text-xs-center">
        <h2 class="ses_navup pointer" @click="$refs.fullpage.api.moveSectionUp()"><i class="fas fa-angle-up"></i></h2>
          <v-container>
            <h1 class="ses_headline">Career</h1>
            <h2 class="ses_subheadline pointer" @click="$refs.fullpage.api.moveSlideRight()">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <h1 class="pb-3"><i class="fas fa-pencil-alt"></i> Career</h1>
          <div class="containersc">
            <div class="box">
              <v-container>
                  <v-layout column>
                    <v-flex xs12>
                      <div v-for="career in careers" :key="career.id">
                      <nuxt-link :to="/career/ + career.id" tag="a" class="ses_sublink">
                          <v-card class="mb-5" color="grey lighten-4" max-width="500">
                          <v-img src="/img/career.jpg" :aspect-ratio="16/9" />
                          </v-img>
                              <v-card-text class="pt-4" style="position: relative;">
                                <h3 class="title font-weight-bold green--text mb-2"> {{ career.title }}</h3>
                              </v-card-text>
                            </v-card>
                            </nuxt-link>
                            </div>
                    </v-flex>
                  </v-layout>
                <div class="back">
                  <h2 class="ses_back pointer" @click="$refs.fullpage.api.moveSlideLeft()"><i class="fas fa-chevron-left"></i> Back</h2>
                </div>
              </v-container>
            </div>
          </div>
        </div>
        </div>
      <div class="section fp-auto-height" id="section2">
        <Footer />
      </div>
    </full-page>
  </div>
</no-ssr>
</template>
<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://sesbackend.thenameisvery.com'
const strapi = new Strapi(apiUrl)
import axios from 'axios'

import Particles from '~/components/Particles.vue'
import Splash from '~/components/Splash.vue'
import About from '~/components/About.vue'
import Footer from '~/components/Footer.vue'

import gql from 'graphql-tag';

const servicesQuery = gql `
  query allServices {
    services {
      id
      title
      subtitle
      content
      icon {
        url
      }
    }
  }
`;
const portfoliosQuery = gql `
  query allPortfolios {
    portfolios {
      id
      title
      subtitle
      content
      feature
      thumbnail {
        url
      }
    }
  }
`;
const blogsQuery = gql `
  query allBlogs {
    blogs {
      id
      title
      content
      image { url }
    }
  }
`;
const careersQuery = gql `
  query allCareers {
    careers {
      id
      title
      content
    }
  }
`;
export default {
  head: {
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Exo+2'
    }]
  },
  data() {
    return {
      options: {
        normalScrollElements: '.containersc',
        controlArrows: false,
        anchors: ['intro', 'about', 'services', 'portfolio', 'blog', 'career', 'footer'],
        menu: '#menu',
      },
      dialog: false,
      dialog2: false,
      dialog3: false,
      on: '',
    }
  },
  apollo: {
    services: {
      query: servicesQuery
    },
    portfolios: {
      query: portfoliosQuery
    },
    blogs: {
      query: blogsQuery
    },
    careers: {
      query: careersQuery
    },
  },
  async asyncData({
    params
  }) {
    let {
      data
    } = await axios.get(`http://sesbackend.thenameisvery.com/pages/1`)
    return {
      abouttitle: data.title,
      aboutcontent: data.content,
      aboutthumbnail: data.thumbnail.url
    }
  },
  layout: 'front',
  components: {
    Particles,
    Splash,
    About,
    Footer
  },
  methods: {
    build() {
      var slideSelector = this.options.slideSelector || '.slide';
      var sectionSelector = this.options.sectionSelector || '.section';
      let activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'));
      let activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
      let activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;
      this.destroy();
      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
      }
      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active');
      }
      this.init();
    },
    destroy() {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all');
      }
    },
    emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit.apply(this, [camelToKebab(name), ...args]);
      // Run event's handler with non Vue way
      if (this.options.hasOwnProperty(name)) {
        this.options[name].apply(this, args);
      }
    },
    init() {
      this.api = new fullpage(this.$refs.fullpage, this.options);
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (typeof this.api !== 'undefined') {
      this.destroy();
    }
  }
}
</script>
<style>
*,
body,
p,
h1,
h2,
h3,
h3 {
  font-family: 'Exo 2', sans-serif;
}
h3.title  {
  font-family: 'Exo 2', sans-serif !important;
  line-height:1.2 !important;
}
p {
  font-size: 16px;
  line-height: 1.8;
}

h1 {
  font-size: 24px;
  line-height: 1.2;
}

h3 {
  font-size: 22px;
  line-height: 1.2;
  padding: 0 0 10px;
}

h4 {
  font-size: 20px;
  line-height: 1.2;
  padding: 0 0 10px;
}

#ses_particles {
  z-index: 9;
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

.ses_splash h1.ses_headline,
.ses_headline {
  font-family: 'Exo 2', sans-serif;
  font-weight: 900;
}

.ses_splash .ses_subheadline {
  font-family: 'Exo 2', sans-serif;
  text-transform: uppercase;
}

.ses_coverabout {
  background-image: url('/img/dot.png'), url('/img/about.jpg');

}

.ses_coverabout,
.ses_coverservices,
.ses_coverportfolio,
.ses_coverresource,
.ses_covercasestudy,
.ses_coverblog,
.ses_covercareer {
  background-position: top right, center top;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  color: #f0f0f0;
}

.ses_coverpage {
  background-color: #e5e5e5;
  background-image: url('/img/poly2.png');
  background-position: center bottom;
  background-repeat: repeat;
}

.ses_coverblog {
  background-image: url('/img/dot.png'), url('/img/blog.jpg');
}

.ses_coverservices {
  background-image: url('/img/dot.png'), url('/img/services.jpg');
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

.ses_coverportfolio {
  background-image: url('/img/dot.png'), url('/img/portfolio.jpg');
}

.ses_covercareer {
  background-image: url('/img/dot.png'), url('/img/career.jpg');
}

.section {
  text-align: center;
  overflow: hidden;
}

#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-color: black;
  /* in case the video doesn't fit the whole page*/
  background-image:
    /* our video */
  ;
  background-position: center center;
  background-size: contain;
  object-fit: cover;
  /*cover video background */
  z-index: 3;
}

#section0 .layer {
  position: absolute;
  z-index: 4;
  width: 100%;
  left: 0;
  top: 43%;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}


#section0 {
  overflow: hidden;
  position: relative;
}

video::-webkit-media-controls {
  display: none !important;
}

.ses_headline {
  font-size: 45px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  padding-top: 0px;
  padding-bottom: 10px;
  color: #eee;
  text-shadow: 1px 1px 1px #555;
  z-index: 99;
}

.ses_subheadline {
  font-weight: 400;
  font-size: 18px;
  color: #eee;
  text-align: center;
  text-transform: lowercase;
  font-style: italic;
}

.ses_back i,
.ses_subheadline i {
  font-size: 12px;
}

h2.ses_navup.pointer,
h2.ses_navdown.pointer,
h2.ses_back.pointer,
h2.ses_subheadline.pointer {
  cursor: pointer;
}

.back {
  position: absolute;
  bottom: 15px;
}

h2.ses_back.pointer {
  position: relative;
  font-weight: 400;
  font-size: 18px;
  color: #444;
  text-transform: lowercase;
  font-style: italic;
  border-bottom: 2px solid #333;
}

h2.ses_navdown.pointer {
  font-size: 40px;
  position: absolute;
  bottom: 35px;
  margin: 0 auto 0;
  width: 50%;
  text-shadow: 1px 1px 5px #555;
}

h2.ses_navup.pointer {
  font-size: 40px;
  position: absolute;
  top: 40px;
  margin: 0 auto 0;
  width: 50%;
  text-shadow: 1px 1px 5px #333;
}

.containersc {
  height: 350px;
  width: auto;
  overflow-y: scroll;
  margin: 15px auto 0;
}

.box {
  display: block;
  margin: 0px 0 0;
  padding: 0px 0 0;
}

.ses_sublink {
  text-decoration: none;
}

.ses_subtitle {
  color: #333;
  font-size: 16px;
}
</style>
