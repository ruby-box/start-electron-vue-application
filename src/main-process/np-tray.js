import { app, Tray, Menu } from 'electron'
import path from 'path'

export default class NpTray {
  constructor () { }

  createTray () {
    let tray = new Tray( path.join(__dirname, '/../resources/installer/Icon.ico') )
    tray.setTitle('Net-Protect')
    tray.setToolTip('Net-Protect CS버전 에이전트입니다.')
    tray.setContextMenu( Menu.buildFromTemplate(this.getLabels()) )

    return tray
  }

  getLabels () {
    return [
        {label: 'Net-Protect 열기', click: function() { app.focus() }},
        {label: '자료전송', click: function() { console.log('자료전송 clicked') }},
        {label: '클립보드 전송', click: function() { console.log('클립보드 전송 clicked') }},
        {label: 'URL Redirection', click: function() { console.log('URL Redirection clicked') }},
        {label: 'Agent 정보', click: function() { console.log('Agent 정보 clicked') }},
        {label: '종료', click: function() { app.quit() }}
      ]
  }
}
