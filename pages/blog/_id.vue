<template>
<no-ssr>
  <div>
    <v-container>
      <v-card>
        <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-2 pr-3 pl-2 elevation-3" fixed>
          <v-toolbar-title class="white--text"><i class="fas fa-folder-open"></i> blog</v-toolbar-title>
          <v-spacer></v-spacer>
          <nuxt-link to="/#blog/1" class="ses_close">
            <v-btn icon dark>
              <v-icon>close</v-icon>
            </v-btn>
          </nuxt-link>
        </v-toolbar>
        <v-divider></v-divider>
        <center><img v-bind:src="'http://sesbackend.thenameisvery.com' + blog.image.url" width="100%" /></center>
        <v-container>
          <v-flex>
            <v-card flat>
              <h2 class="ses_blogtitle text-xs-center pb-3">{{ blog.title }}</h2>
              <div v-html="$md.render( blog.content )"></div>
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
  name: 'blog',
  metaInfo() {
    return {
      title: this.blog.title,
      titleTemplate: '%s - Synergy Efficiency Solutions'
    }
  },
  layout: 'blank',
  computed: {},
  async asyncData({
    params,
    error
  }) {
    let blog = await axios.get(`${apiUrl}/blogs/${params.id}`)
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
      blog
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

.ses_blogtitle {
  font-size: 20px;
}

.ses_close {
  text-decoration: none;
}
</style>
