<template>
<v-container grid-list-md text-xs-center >
<div v-for="service in services" :key="service.id">
  <v-layout row wrap>
    <v-flex xs12 class="ses_serviceslist">
      <v-card-text class="px-0"></v-card-text>
      <v-img src="/img/EnergyPerformanceSimulation.png" max-height="72" contain />
      <v-card-text class="px-0">{{ service.title }}</v-card-text>
    </v-flex>
  </v-layout>
  </div>
</v-container>
</template>
<script>
export default {
  props: ['servicetitle', 'servicecontent', 'serviceicon'],
  data() {
    options: {
      normalScrollElements: '.ses_scrollable'
    }
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  }
}
</script>

<style>
</style>
