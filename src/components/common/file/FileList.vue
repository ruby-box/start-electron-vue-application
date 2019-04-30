<script>
  import Videos from '@/services/videos'
  export default {
    name: 'VideosList',
    data () {
      return {
        videos: Videos.get(),
        downloadsCount: 0
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (!Videos.get().length) {
          vm.$router.push('home')
        }
      })
    },
    mounted () {
      for (let i = 0; i < this.videos.length; i++) {
        const video = this.videos[i]
        this.downloadSub(video.id, video.name, video.path, video.size)
      }
    },
    beforeDestroy () {
      Videos.clear()
    },
    methods: {
      downloadSub (id, name, path, size) {
        this.downloadsCount++
        console.log("name : " + name + ", path : " + path + ", size : " + size);
      },
      changeStatus (id, status) {
        for (let i = 0; i < this.videos.length; i++) {
          if (this.videos[i].id === id) {
            this.videos[i].status = status
            return
          }
        }
      }
    }
  }
</script>

<template>
  <!-- #files-list
    table.table-striped
      thead
        tr
          th.th-name Name
          th Status
      tbody
        tr(v-for='video in videos')
          td {{ video.name }}
          td.text-center
            .spinner(v-if='video.status === \'loading\'')
              .bounce1
              .bounce2
              .bounce3
            span.icon.icon-cancel(v-else-if='video.status === \'error\'')
            span.icon.icon-check(v-else-if='video.status === \'completed\'') -->
</template>

<style>
  #files-list {
    width: 100%;
    table {
      table-layout: fixed;
      .th-name {
          width: 80%;
      }
      .text-center {
        text-align: center;
      }
    }
  }
</style>
