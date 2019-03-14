<template>
<v-list>
      <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-content>
              <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
      </v-list-tile>
  </v-list>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                title: 'Home',
                to: '/'
            }, {
                title: 'About',
                to: '/about'
            }, {
                title: 'Services',
                to: '/services',
            }, {
                title: 'Portfolio',
                to: '/portfolio',
            }, {
                title: 'Resource',
                to: '/page',
            }, {
                title: 'Case Study',
                to: '/page',
            }, {
                title: 'Blog',
                to: '/updates',
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

<style lang="css">
</style>
