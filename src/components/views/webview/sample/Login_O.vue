<script>
let remote = require('electron').remote

export default {
  methods: {
  },
  data () {
    return {
      link: remote.getGlobal('sharedObj').trs_o_url + '/sign/index.lin'
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
      partition="persist:commono"
      ></webview>
  </div>
</template>

<style>
@import url('../../../../assets/styles/webview.css');
</style>
