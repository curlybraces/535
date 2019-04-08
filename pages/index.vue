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
          <v-container>
            <h1 class="ses_headline">About SES</h1>
            <h2 class="ses_subheadline">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage">
          <img src="/img/favicon.png" width="70" />
          <h1><i class="fas fa-user-friends"></i> About</h1>
          <div class="containersc">
            <v-container text-xs-left>
            <div v-html="$md.render( aboutcontent )"></div>
            </v-container>
          </div>
        </div>
      </div>
      <div id="servicesnav" class="section">
        <div class="slide ses_coverservices text-xs-center">
          <v-container>
            <h1 class="ses_headline">Services</h1>
            <h2 class="ses_subheadline">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <v-layout column>
              <v-flex>
                <h1><i class="fas fa-cubes"></i> Services</h1>
                <h3>What We Can Do For You</h3>
                <div class="containersc">
                  <div class="box">
                    <div v-for="service in services" :key="service.id">
                      <v-layout row wrap>
                        <v-flex xs12 class="ses_serviceslist">
                          <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                            <template v-slot:activator="{ on }">
                              <v-flex v-on="on">
                                <v-card-text class="px-0"></v-card-text>
                                <img v-bind:src="'http://sesbackend.thenameisvery.com' + service.icon.url" max-width="100" />
                                <v-card-text class="px-0">{{ service.title }}</v-card-text>
                              </v-flex>
                            </template>
                            <v-card>
                              <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-4 pr-3 pl-2 elevation-3" fixed>
                                <v-toolbar-title class="white--text"><i class="fas fa-cubes"></i> Our Services</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon dark @click="dialog = false">
                                  <v-icon>close</v-icon>
                                </v-btn>
                              </v-toolbar>
                              <v-divider></v-divider>
                              <v-container class="mt-5">
                                <v-flex>
                                  <v-card flat class="mt-5">
                                    <center><img v-bind:src="'http://sesbackend.thenameisvery.com' + service.icon.url" max-width="40" /></center>
                                    <h2 text-sx-center>{{ service.title }}</h2>
                                    <div v-html="$md.render( service.content )"></div>
                                  </v-card>
                                </v-flex>
                              </v-container>
                            </v-card>
                          </v-dialog>
                        </v-flex>
                      </v-layout>
                    </div>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
      <div id="portoflionav" class="section">
        <div class="slide ses_coverportfolio text-xs-center">
          <v-container>
            <h1 class="ses_headline">Portfolio</h1>
            <h2 class="ses_subheadline">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <h1 class="pb-3"><i class="fas fa-folder-open"></i> Portfolio</h1>
          <div class="containersc">
            <div class="box">
              <v-container>
                <div v-for="portfolio in portfolios" :key="portfolio.id">
                  <v-layout column>
                    <v-flex xs12>
                      <v-dialog v-model="dialogP" fullscreen hide-overlay transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on }">
                          <v-flex v-on="on">
                            <v-card class="mb-5" color="grey lighten-4" max-width="500">
                              <v-img v-bind:src="'http://sesbackend.thenameisvery.com' + portfolio.thumbnail.url" :aspect-ratio="16/9" />
                              </v-img>
                              <v-card-text class="pt-4" style="position: relative;">
                                <h3 class="title font-weight-bold green--text mb-2"> {{ portfolio.title }}</h3>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </template>
                        <v-card>
                          <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-4 pr-3 pl-2 elevation-3" fixed>
                            <v-toolbar-title class="white--text"><i class="fas fa-folder-open"></i> Portfolio</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon dark @click="dialogP = false">
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-toolbar>
                          <v-divider></v-divider>
                          <v-container class="mt-5">
                            <v-flex>
                              <v-card flat class="mt-5">
                                <v-img v-bind:src="'http://sesbackend.thenameisvery.com' + portfolio.thumbnail.url" :aspect-ratio="16/9" />
                                </v-img>
                                <h2 text-sx-center>{{ portfolio.title }}</h2>
                                <div v-html="$md.render( portfolio.content )"></div>
                              </v-card>
                            </v-flex>
                          </v-container>
                        </v-card>
                      </v-dialog>
                    </v-flex>
                  </v-layout>
                </div>
              </v-container>
            </div>
          </div>
        </div>
      </div>
      <div id="blognav" class="section">
        <div class="slide ses_coverblog text-xs-center">
          <v-container>
            <h1 class="ses_headline">Blog</h1>
            <h2 class="ses_subheadline">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <h1 class="pb-3"><i class="fas fa-pencil-alt"></i> Blog</h1>
          <div class="containersc">
            <div class="box">
              <v-container>
                <div v-for="blog in blogs" :key="blog.id">
                  <v-layout column>
                    <v-flex xs12>
                      <v-dialog v-model="dialogB" fullscreen hide-overlay transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on }">
                          <v-flex v-on="on">
                            <v-card class="mb-5" color="grey lighten-4" max-width="500">
                              <v-img v-bind:src="'http://sesbackend.thenameisvery.com' + blog.image.url" :aspect-ratio="16/9" />
                              </v-img>
                              <v-card-text class="pt-4" style="position: relative;">
                                <h3 class="title font-weight-bold green--text mb-2"> {{ blog.title }}</h3>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </template>
                        <v-card>
                          <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-4 pr-3 pl-2 elevation-3" fixed>
                            <v-toolbar-title class="white--text"><i class="fas fa-pencil-alt"></i> Blog</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon dark @click="dialogB = false">
                              <v-icon>close</v-icon>
                            </v-btn>
                          </v-toolbar>
                          <v-divider></v-divider>
                          <v-container class="mt-5">
                            <v-card flat class="mt-5">
                              <v-flex>
                                <v-img v-bind:src="'http://sesbackend.thenameisvery.com' + blog.image.url" :aspect-ratio="16/9" />
                                </v-img>
                              </v-flex>
                              <v-flex py-3>
                              <h2 text-sx-center>{{ blog.title }}</h2>
                              </v-flex>
                              <v-flex>
                                <div v-html="$md.render( blog.content )"></div>
                              </v-flex>
                            </v-card>
                          </v-container>
                        </v-card>
                      </v-dialog>
                    </v-flex>
                  </v-layout>
                </div>
              </v-container>
            </div>
          </div>
        </div>
      </div>
      <div id="careernav" class="section">
        <div class="slide ses_covercareer text-xs-center">
          <v-container>
            <h1 class="ses_headline">Career</h1>
            <h2 class="ses_subheadline">More <i class="fas fa-chevron-right"></i></h2>
          </v-container>
        </div>
        <div class="slide ses_coverpage text-xs-center">
          <v-container>
            <v-layout column pl-5 pr-5>
              <h1 class="pb-3">Carrers</h1>
              <div v-for="career in careers" :key="career.id">
                <v-hover>
                  <v-card slot-scope="{ hover }" class="mb-5" color="grey lighten-4" max-width="500" v-on="on">
                    <v-expand-transition>
                      <nuxt-link :to="/career/ + career.id" tag="a" v-if="hover" class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal title white--text" style="height: 100%;">
                        Read More
                      </nuxt-link>
                    </v-expand-transition>
                    <v-card-text class="pt-4" style="position: relative;">
                      <h3 class="title font-weight-bold green--text mb-2">{{ career.title }}</h3>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </div>
            </v-layout>
          </v-container>
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
import OurServices from '~/components/OurServices.vue'
import Resource from '~/components/Resource.vue'
import CaseStudy from '~/components/CaseStudy.vue'
import Faq from '~/components/Faq.vue'
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
  data() {
    return {
      options: {
        normalScrollElements: '.containersc'
      },
      dialog: false,
      dialogP: false,
      dialogB: false
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
    OurServices,
    Resource,
    CaseStudy,
    Faq,
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
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Exo+2');

* {
font-family: 'Exo 2', sans-serif;

}
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

.ses_splash h1.ses_headline {
  font-family: 'Exo 2', sans-serif;
  font-weight:900;
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
  background-position: center bottom;
  background-repeat: repeat;
}

.ses_coverblog {
  background-image: url('/img/blog.jpg');
}

.ses_coverservices {
  background-image: url('/img/services.jpg');
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
  background-image: url('/img/portfolio.jpg');
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
  color: #e0e0e0;
  text-shadow: 1px 1px 1px #555;
  z-index: 99;
}

.ses_subheadline {
  font-weight: 400;
  font-size: 18px;
  color: #eee;
  text-align: center;
  text-transform: lowercase;
  font-style:italic;
}
.ses_subheadline i {
font-size: 12px;
}
.ses_covercareer {
  background-image: url('/img/career.jpg');
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
</style>
