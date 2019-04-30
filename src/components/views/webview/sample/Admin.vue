<script>
const remote = require('electron').remote
const { session } = require('electron').remote

export default {
  methods: {
  },
  data () {
    return {
      link: remote.getGlobal('sharedObj').trs_i_url + '/sign/trans.lin'
    }
  }
}

// document.addEventListener('DOMContentLoaded', function () {
//   let webview = document.getElementById('content');
//   webview.addEventListener("dom-ready", function() {
//     webview.openDevTools();
//   })
// });
onload = () => {
  let webview = document.getElementById('content');
  webview.addEventListener("dom-ready", function() {
    webview.openDevTools();
  })

  console.log(session.fromPartition('persist:admin'))
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
      partition="persist:admin"
      ></webview>
  </div>
</template>

<style>
@import url('../../../../assets/styles/webview.css');
</style>
