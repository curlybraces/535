<template>
<no-ssr>
<v-container>
 <v-layout>
  <v-flex>
  <h1>It works</h1>
   <model-obj src="/3d/7.obj" mtl="/3d/7.mtl"></model-obj>
   </v-flex>
  </v-layout>
</v-container>
</no-ssr>
</template>
<script>
import { ModelObj } from 'vue-3d-model'

export default {
 components: { ModelObj }
}
</script>
