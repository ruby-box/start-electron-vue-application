<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['image', 'color'])
  }
}
</script>

<template>
  <v-footer color="light-blue" app>
    <span class="white--text">&nbsp;&copy; Net-Protect</span>
  </v-footer>
</template>
