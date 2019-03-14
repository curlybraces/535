<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <div class="ses-logo-push">
        <a href="/"><img src="/img/logosesfull.png" /></a>
      </div>
      <v-list>
            <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"/>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
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
export default {
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [{
                title: 'Home',
                to: '/'
            }, {
                title: 'About',
                to: '/page'
            }, {
                title: 'Service',
                to: '/page',
            }, {
                title: 'Portfolio',
                to: '/page',
            }, {
                title: 'Resource',
                to: '/page',
            }, {
                title: 'Case Study',
                to: '/page',
            }, {
                title: 'Blog',
                to: '/page',
            }, {
                title: 'Career',
                to: '/page',
            }],
            miniVariant: false,
            right: true,
            rightDrawer: null,
            title: 'Synergy Efficiency Solutions'
        }
    }
}

</script>
<style>

</style>
