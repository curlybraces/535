<template>
  <div id="app">
    <v-app id="inspire">
      <div>
        <v-layout column justify-center align-center>
          <v-subheader>Offset Top</v-subheader>
          {{ offsetTop }}
        </v-layout>
        <v-container
          id="scroll-target"
          style="max-height: 400px"
          class="scroll-y"
        >
          <v-layout
            v-scroll:#scroll-target="onScroll"
            column
            align-center
            justify-center
            style="height: 1000px"
          >
          </v-layout>
        </v-container>
      </div>
    </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      offsetTop: 0
    }),

    methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      }
    }
  }
</script>
