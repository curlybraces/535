<template>
<div>
  <div class="slide ses_coverpage text-xs-center">
    <v-container id="scroll-target">
      <v-layout column pl-5 pr-5>
          <h1 class="pb-3">Carrers</h1>
            <div v-for="career in careers" :key="career.id">
            <v-hover>
              <v-card slot-scope="{ hover }" class="mb-5" color="grey lighten-4" max-width="500" v-on="on">
                  <v-expand-transition>
                  <nuxt-link :to="/carrer/ + carrer.id" tag="a" v-if="hover" class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal title white--text" style="height: 100%;">
                      Read More
                    </nuxt-link>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-4" style="position: relative;">
                  <h3 class="title font-weight-bold green--text mb-2">{{ career.title }}</h3>
                  <p class="font-weight-light grey--text subtitle mb-2">South-East Asia's Most Energy Efficient Building</p>
                </v-card-text>
              </v-card>
            </v-hover>
            </div>

      </v-layout>
    </v-container>
  </div>
</div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://sesbackend.thenameisvery.com'
const strapi = new Strapi(apiUrl)

import axios from 'axios'


export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    careers() {
      return this.$store.getters['careers/list']
    }
  },
  async fetch({ store }) {
    store.commit('careers/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            careers {
              id
              title
              content
            }
          }
          `
      }
    })
    response.data.careers.forEach(career => {
      store.commit('careers/add', {
        id: career.id,
        ...career
      })
    })
  }
}
</script>
