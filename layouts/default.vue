<template>
<v-app>
  <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
    <div class="ses-logo-push">
      <nuxt-link to="/"><img src="/img/logosesfull.png" /></nuxt-link>
    </div>
    <MenuItems />
  </v-navigation-drawer>
  <v-toolbar app :clipped-left="clipped">
    <div class="ses-logo">
      <nuxt-link to="/"><img src="/img/logoses.png" /></nuxt-link>
    </div>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  </v-toolbar>

  <v-content>
    <nuxt />
  </v-content>
</v-app>
</template>
<script>
import MenuItems from '~/components/MenuItems.vue'

export default {
  components: {
    MenuItems
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: null,
      title: 'Synergy Efficiency Solutions'
    }
  }
}
</script>
