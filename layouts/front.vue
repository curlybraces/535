<template>
  <v-app class="frontnav">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <div class="ses-logo-push">
        <nuxt-link to="/"><img src="/img/logosesfull.png" /></nuxt-link>
      </div>
      <MenuItems />
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
    <div class="ses-logo"><a href="/"><img src="/img/logoses.png" /></a></div>
    <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
      <v-content>
        <nuxt/>
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
<style>
.frontnav main.v-content {
    padding-top: 0px !important;
}

.frontnav .theme--light.v-toolbar {
    background-color: transparent;
}
.frontnav .v-toolbar {
  box-shadow:none;
}
.frontnav .v-toolbar__content {
    padding: 30px 20px 0px 20px;
}
.frontnav .v-list__tile__title {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
