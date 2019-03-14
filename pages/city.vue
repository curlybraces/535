<template>
<no-ssr>
  <model-obj src="/3d/city/city.obj" mtl="/3d/city/city.mtl"></model-obj>
</no-ssr>
</template>
<script>
import { ModelObj } from 'vue-3d-model'

export default {
 components: { ModelObj }
}
</script>
