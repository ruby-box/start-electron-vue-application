const { clipboard } = require('electron')

function paste () {
  document.getElementsByName("clipboard-textarea")[0].value = clipboard.readText('selection')
}

function copy () {
  let area = document.getElementsByName("clipboard-textarea")[0].value
  clipboard.writeText(area, 'selection')
}

export default {
  paste,
  copy
}
