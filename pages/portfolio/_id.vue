<template>
<no-ssr>
  <div>
    <v-container>
      <v-card>
        <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-2 pr-3 pl-2 elevation-3" fixed>
          <v-toolbar-title class="white--text"><i class="fas fa-folder-open"></i> Portfolio</v-toolbar-title>
          <v-spacer></v-spacer>
          <nuxt-link to="/#portfolio/1" class="ses_close">
            <v-btn icon dark>
              <v-icon>close</v-icon>
            </v-btn>
          </nuxt-link>
        </v-toolbar>
        <v-divider></v-divider>
        <center><img v-bind:src="'http://sesbackend.thenameisvery.com' + portfolio.thumbnail.url" width="100%" /></center>
        <v-container>
          <v-flex>
            <v-card flat>
              <h2 class="ses_portotitle text-xs-center pb-3">{{ portfolio.title }}</h2>
              <v-tabs fixed-tabs>
                <v-tab href="#details" ripple>Details</v-tab>
                <v-tab href="#features" ripple>Features</v-tab>
                <v-tab href="#project" ripple>Project</v-tab>
                <v-tabs-items touchless>
                  <v-tab-item value="details">
                    <v-card flat>
                      <div class="ses_3dmodel">
                        <model-obj src="/3d/city/city.obj" mtl="/3d/city/city.mtl"></model-obj>
                      </div>
                      <v-card-text>
                        <div v-html="$md.render( portfolio.content )"></div>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item value="features">
                    <v-card flat>
                      <v-card-text>
                        <div v-html="$md.render( portfolio.feature )"></div>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item value="project">
                    <v-card flat>
                      <v-card-text>
                        Underconstruction
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-tabs>
            </v-card>
          </v-flex>
        </v-container>
      </v-card>
    </v-container>
  </div>
</no-ssr>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://sesbackend.thenameisvery.com'
const strapi = new Strapi(apiUrl)
import axios from 'axios'
import {
  ModelObj
} from 'vue-3d-model'

export default {
  head: {
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Exo+2'
    }],
    title: 'Portfolio'
  },
  layout: 'blank',
  components: {
    ModelObj
  },
  computed: {},
  async asyncData({
    params,
    error
  }) {
    let portfolio = await axios.get(`${apiUrl}/portfolios/${params.id}`)
      .then(res => {
        return res.data
      })
      .catch(e => {
        error({
          statusCode: 404,
          message: 'Posts not found'
        })
      })
    return {
      portfolio
    }
  }
}
</script>

<style>
.v-toolbar__title,
.v-card,
.v-tabs,
v-card__text p {
  font-family: 'Exo 2', sans-serif;
}

.v-toolbar__title {
  font-weight: 900;
  text-transform: uppercase;
}

p {
  font-size: 16px;
  line-height: 1.8;
}

.ses_portotitle {
  font-size: 28px;
}

.ses_close {
  text-decoration: none;
}
</style>
