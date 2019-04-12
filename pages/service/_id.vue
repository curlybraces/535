<template>
<div>
  <v-card>
    <v-toolbar color="indigo darken-4" class="ses_toolbar_modal pt-1 pb-2 pr-3 pl-2 elevation-3" fixed>
      <v-toolbar-title class="white--text"><i class="fas fa-cubes"></i> Our Services</v-toolbar-title>
      <v-spacer></v-spacer>
      <nuxt-link to="/#services/1" class="ses_close">
        <v-btn icon dark>
          <v-icon>close</v-icon>
        </v-btn>
      </nuxt-link>
    </v-toolbar>
    <v-divider></v-divider>
    <v-container class="mt-5">
      <v-flex>
        <v-card flat>
          <center><img v-bind:src="'http://sesbackend.thenameisvery.com' + service.icon.url" max-width="40" /></center>
          <h2 text-sx-center>{{ service.title }}</h2>
          <div v-html="$md.render( service.content )"></div>
        </v-card>
      </v-flex>
    </v-container>
  </v-card>
</div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://sesbackend.thenameisvery.com'
const strapi = new Strapi(apiUrl)
import axios from 'axios'

export default {
name: 'service',
metaInfo() {
  return {
    title: this.service.title,
    titleTemplate: '%s - Synergy Efficiency Solutions'
  }
},

  async asyncData({
    params,
    error
  }) {
    let service = await axios.get(`${apiUrl}/services/${params.id}`)
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
      service
    }
  }
}
</script>

<style>
.ses_close {
  text-decoration: none;
}
</style>
