<template>
<div>
  <div class="slide ses_coverpage text-xs-center">
    <v-layout column justify-center align-center>
      <h1>Services</h1>
      <h3>What We Can Do For You</h3>
    </v-layout>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap v-for="service in services" :key="service.id">
        <v-flex xs12 class="ses_serviceslist">
          <v-card-text class="px-0"></v-card-text>
          <nuxt-link :to="/service/ + service.id" tag="a">
          <v-img max-height="72" contain :src="service.icon.url"></v-img>
          </nuxt-link>
          <v-card-text class="px-0">{{ service.title }}</v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://sesbackend.thenameisvery.com'
const strapi = new Strapi(apiUrl)

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    services() {
      return this.$store.getters['services/list']
    }
  },
  async fetch({ store }) {
    store.commit('services/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
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
          `
      }
    })
    response.data.services.forEach(service => {
      service.icon.url = `${apiUrl}${service.icon.url}`
      store.commit('services/add', {
        id: service.id,
        ...service
      })
    })
  }
}
</script>

<style>
.ses_coverservices {
  backgroundimage: url('/img/services.jpg');
}
</style>
