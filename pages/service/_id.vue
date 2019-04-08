<template>
<div>
  <v-container>
    <v-layout column>
      <v-flex text-xs-center>
        <img width="150" v-bind:src="'http://sesbackend.thenameisvery.com' + service.icon.url" />
      </v-flex>
      <v-flex text-xs-center>
        <h2>{{ service.title }}</h2>
      </v-flex>
      <v-flex>
        {{ service.content}}
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://sesbackend.thenameisvery.com'
const strapi = new Strapi(apiUrl)
import axios from 'axios'

export default {
  computed: {},
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
