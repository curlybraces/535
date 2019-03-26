<template>
<div>
  <div class="slide ses_coverservices text-xs-center">
    <v-container>
      <h1 class="ses_headline">Services</h1>
      <h2 class="ses_subheadline">More</h2>
    </v-container>
  </div>
  <div class="slide ses_coverpage text-xs-center">
    <v-layout column justify-center align-center>
      <h1>Services</h1>
      <h3>What We Can Do For You</h3>
    </v-layout>
    <OurServices />
  </div>
</div>
</template>

<script>
import OurServices from '~/components/OurServices.vue'

export default {
  components: {
    OurServices
  }
}
</script>

<style>
.ses_coverservices {
  background-image: url('/img/services.jpg');
}
</style>
