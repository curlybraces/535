<template>
<div>
  <div class="slide ses_coverpage text-xs-center">
    <v-container id="scroll-target">
      <v-layout column pl-5 pr-5>
          <h1 class="pb-3">Blog</h1>
            <div v-for="blog in blogs" :key="blog.id">
            <v-hover>
              <v-card slot-scope="{ hover }" class="mb-5" color="grey lighten-4" max-width="500" v-on="on">
              <v-img :aspect-ratio="16/9" :src="blog.image.url">
                  <v-expand-transition>
                  <nuxt-link :to="/blog/ + blog.id" tag="a" v-if="hover" class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal title white--text" style="height: 100%;">
                      Read More
                    </nuxt-link>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-4" style="position: relative;">
                  <h3 class="title font-weight-bold green--text mb-2">{{ blog.title }}</h3>
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

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    blogs() {
      return this.$store.getters['blogs/list']
    }
  },
  async fetch({ store }) {
    store.commit('blogs/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            blogs {
              id
              title
              content
              image {
                url
              }
            }
          }
          `
      }
    })
    response.data.blogs.forEach(blog => {
      blog.image.url = `${apiUrl}${blog.image.url}`
      store.commit('blogs/add', {
        id: blog.id,
        ...blog
      })
    })
  }
}
</script>
