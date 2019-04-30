import NpWindowContextMenu from './window-context-menu'
import NpTray from './np-tray'
import NpGlobalVariable from '../env/np-global-variable'

const npTray = new NpTray()
const npWindowContextMenu = new NpWindowContextMenu()
const npGlobalVariable = new NpGlobalVariable()

export default {
  npTray,
  npWindowContextMenu,
  npGlobalVariable
}
