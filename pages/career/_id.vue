<template>
<div>
<h2>{{ career.title }}</h2>
{{ career.content}}
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
  let career = await axios.get(`${apiUrl}/careers/${params.id}`)
  .then(res => {
    return res.data
  })
  .catch(e => {
    error({statusCode: 404, message: 'Posts not found'})
  })
  return {
  career
  }
  }
}

</script>
