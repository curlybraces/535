<template>
<div>
  <h1 class="title">
    Static Post Title
  </h1>
  <span class="content">
<span v-html="post.content.rendered"></span>
  </span>
</div>
</template>

<script>
import axios from 'axios'
export default {
  head () {
    return {
      title: this.post._yoast_wpseo_title,
      meta: [
        { hid: 'description', id: 'description', name: 'description', content: this.post._yoast_wpseo_metadesc }
      ]
    }
  },
  asyncData ({ params }) {
    return axios.get(`https://you.thenameisvery.com/sescms/wp-json/wp/v2/pages/8`)
      .then(response => {
        return { post: response.data }
      })
      .catch((error) => {
        return { error: error }
      })
  },
  data () {
    return {
      post: {},
      error: []
    }
  }
}
</script>
