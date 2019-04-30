<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({

  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
  },
  props: {
    source: String
  }
}
</script>
<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    :clipped="$vuetify.breakpoint.mdAndUp"
    fixed
    app
  >
    <core-menu-leftlist />
  </v-navigation-drawer>
</template>
