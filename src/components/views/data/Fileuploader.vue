<script>
export default {
  data: () => ({
    form: {
      name: '파일업로더'
    }
  }),
  mounted () {
  },
  methods: {
    upload () {
      const fd = new FormData()

      fd.append('name', this.form.name)
      fd.append('bin', document.getElementById('bin').files[0])
      alert(document.getElementById('bin').files[0].path);
      // this.$axios.post('/user', fd)
      //   .then(() => {
      //     this.$store.commit('pop', { msg: '파일 업로드 완료', color: 'success' })
      //   })
      //   .catch(e => {
      //     if (!e.response) this.$store.commit('pop', { msg: e.message, color: 'warning' })
      //   })
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex
        mb-5
        xs12>
        <v-card class="elevation-12">
          <v-card-title>파일업로더</v-card-title>
          <v-card-text>
            <input id="bin" type="file">
          </v-card-text>
          <v-card-actions>
            <v-btn @click="upload">전송</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
