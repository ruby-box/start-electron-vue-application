<script>
let remote = require('electron').remote

export default {
  methods: {
  },
  data () {
    return {
      link: remote.getGlobal('sharedObj').trs_i_url + '/cs/data/file/sendList.lin'
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
      nodeintegration
      partition="persist:commoni"
      ></webview>
  </div>
</template>

<style>
@import url('../../../../assets/styles/webview.css');
</style>
