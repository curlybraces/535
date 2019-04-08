<template>
<div>
    <img width="100%" v-bind:src="'http://sesbackend.thenameisvery.com' + blog.image.url" />
    <h2>{{ blog.title }}</h2>
    <div> {{ blog.content }}</div>
</div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://sesbackend.thenameisvery.com'
const strapi = new Strapi(apiUrl)
import axios from 'axios'


export default {
  computed: {
    body () {
      return marked(this.blog.content)
    }
  },
  async asyncData({params,error}) {
  let blog = await axios.get(`${apiUrl}/blogs/${params.id}`)
  .then(res => {
    return res.data
  })
  .catch(e => {
    error({statusCode: 404, message: 'Posts not found'})
  })
  return {
  blog
  }
  }
}

</script>
