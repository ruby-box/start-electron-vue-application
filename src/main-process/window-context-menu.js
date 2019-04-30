import WinShell from './win-shell'

const updateContextMenus = (callback) => {
  WinShell.fileContextMenu.register(() =>
    WinShell.folderContextMenu.register(() =>
      WinShell.folderBackgroundContextMenu.register(() => callback())
    )
  )
}
export default class NpWindowContextMenu {
  constructor () { }

  registWindowContextMenu() {
    WinShell.fileHandler.register(() =>
              updateContextMenus(() => { console.log('Add Window context menu success!!!') })
            )
  }
}
