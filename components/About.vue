<template>
<div>
  <div class="slide ses_coverabout text-xs-center">
    <v-container>
      <h1 class="ses_headline">About</h1>
      <p>SES is on a mission to simplify energy efficiency across Southeast Asia</p>
      <h2 class="ses_subheadline">More</h2>
    </v-container>
  </div>
  <div class="slide ses_coverpage">
      <v-img contain v-bind:src="'http://sesbackend.thenameisvery.com' + aboutthumbnail" />
      </v-img>
      <v-container>
        <v-layout column>
          <v-flex>
          <h1>{{ abouttitle }}</h1>
          <div v-html="$options.filters.parseMd( aboutcontent )"></div>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</div>
</template>

<script>
export default {
  props: ['abouttitle', 'aboutcontent', 'aboutthumbnail']
}
</script>
<style>
</style>
