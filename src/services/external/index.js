var exec = require('child_process').exec;
//const notifier = require("node-notifier");
const notifier = require("node-notifier");

function open() {
  let url = document.getElementsByName("external-textarea")[0].value;
  alert(`${url} 을 IE에서 엽니다.`);
  exec(`start "" "iexplore" ${url}`);
}

function notification() {
  alert("noti");

  var onError = function(err,response){
      console.error(err,response);
  };

  notifier.notify({
      message: "This is the body of the notification.",
      title: "This will be the title of the notification",
      sound: false,
      icon : `${__dirname}/../resources/installer/Icon.ico`,
      wait:true
  },onError);

  notifier.on('click', function (notifierObject, options) {
      // Triggers if `wait: true` and user clicks notification
      alert("Callback triggered");
  });
}
export default {
  open,
  notification
}
