<template>
<div>
  <v-container>
    <v-layout column>
      <v-flex text-xs-center>
        <img width="150" v-bind:src="'http://sesbackend.thenameisvery.com' + portfolio.thumbnail.url" />
      </v-flex>
      <v-flex text-xs-center>
        <h2>{{ portfolio.title }}</h2>
      </v-flex>
      <v-flex>
        {{ portfolio.content }}
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

import gql from 'graphql-tag';

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

export default {
  apollo: {
    portfolios: {
      query: portfoliosQuery
    }
  }
}



</script>
