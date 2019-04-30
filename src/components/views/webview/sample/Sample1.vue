<script>
export default {
  methods: {
  },
  data () {
    return {
      link: 'https://vuetifyjs.com/ko/components/timelines'
    }
  }
}
</script>

<template>
  <div id="master-div" master>
    <webview
      ng-style="style"
      id="content"
      :src="link"
      autosize="on"
      allowpopups
      useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
      ></webview>
  </div>
</template>

<style>
@import url('../../../../assets/styles/webview.css');
</style>
