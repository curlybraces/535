<template>
<no-ssr>
  <div>
    <v-container>
      <v-card>
        <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-2 pr-3 pl-2 elevation-3" fixed>
          <v-toolbar-title class="white--text"><i class="fas fa-folder-open"></i> career</v-toolbar-title>
          <v-spacer></v-spacer>
          <nuxt-link to="/#career/1" class="ses_close">
          <v-btn icon dark>
            <v-icon>close</v-icon>
          </v-btn>
          </nuxt-link>
        </v-toolbar>
        <v-divider></v-divider>
        <center><img src="/img/career.jpg" width="100%" /></center>
        <v-container>
          <v-flex>
            <v-card flat>
              <h2 class="ses_careertitle text-xs-center pb-3">{{ career.title }}</h2>
                <div v-html="$md.render( career.content )"></div>
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

export default {
name: 'career',
metaInfo() {
  return {
    title: this.career.title,
    titleTemplate: '%s - Synergy Efficiency Solutions'
  }
},
  head: {
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Exo+2'
    }],
    title: 'career'
  },
  layout: 'blank',
  computed: {},
  async asyncData({
    params,
    error
  }) {
    let career = await axios.get(`${apiUrl}/careers/${params.id}`)
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
      career
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

.ses_careertitle {
  font-size: 20px;
}

.ses_close {
  text-decoration: none;
}

</style>
