<script>
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      title: null
    }),
    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
      onClickBtn () {
        this.setDrawer( !this.$store.state.app.drawer )
      },
      onClick () {

      }
    },
    watch: {
      '$route' (val) {
        this.title = val.name
      }
    }
  }
</script>
<template>
  <v-toolbar color="light-blue" dark fixed app :clipped-left="$vuetify.breakpoint.mdAndUp">
    <v-toolbar-side-icon @click.stop="onClickBtn"></v-toolbar-side-icon>
    <v-toolbar-title style="weight: 800">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>
