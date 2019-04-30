import Registry from 'winreg'
import Path from 'path'
const isDevelopment = process.env.NODE_ENV !== 'production'

//let exeName = Path.basename(process.execPath)
//let appPath = `\"${process.execPath}\"`
let exeName = 'NetProtectAgent.exe'
let appDefaultName = 'Net-Protect Agent'
let appPath = `\"${process.execPath}\"`
let fileIconPath = `\"${Path.join(process.execPath, '..', 'resources', 'cli', 'file.ico')}\"`
let isBeta = appPath.includes(' Beta')
let appName = exeName.replace(appDefaultName, isBeta ? `${appDefaultName} Beta` : appDefaultName).replace('.exe', '')

class ShellOption {
  constructor (key, parts) {
    this.isRegistered = this.isRegistered.bind(this)
    this.register = this.register.bind(this)
    this.deregister = this.deregister.bind(this)
    this.update = this.update.bind(this)
    this.key = key
    this.parts = parts
  }

  isRegistered (callback) {
    new Registry({hive: 'HKCU', key: `${this.key}\\${this.parts[0].key}`})
      .get(this.parts[0].name, (err, val) => callback((err == null) && (val != null) && val.value === this.parts[0].value))
  }

  register (callback) {
    let doneCount = this.parts.length
    this.parts.forEach(part => {
      let reg = new Registry({hive: 'HKCU', key: (part.key != null) ? `${this.key}\\${part.key}` : this.key})
      return reg.create(() => reg.set(part.name, Registry.REG_SZ, part.value, () => { if (--doneCount === 0) return callback() }))
    })
  }

  deregister (callback) {
    this.isRegistered(isRegistered => {
      if (isRegistered) {
        new Registry({hive: 'HKCU', key: this.key}).destroy(() => callback(null, true))
      } else {
        callback(null, false)
      }
    })
  }

  update (callback) {
    new Registry({hive: 'HKCU', key: `${this.key}\\${this.parts[0].key}`})
      .get(this.parts[0].name, (err, val) => {
        if ((err != null) || (val == null)) {
          callback(err)
        } else {
          this.register(callback)
        }
      })
  }
}

const fileHandler = new ShellOption(`\\Software\\Classes\\Applications\\${exeName}`,
  [
    {key: 'shell\\open\\command', name: '', value: `${appPath} \"%1\"`},
    {key: 'shell\\open', name: 'FriendlyAppName', value: `${appName}`},
    {key: 'DefaultIcon', name: '', value: `${fileIconPath}`}
  ]
)

let linkCommand = isDevelopment ? `${appPath} \"${Path.join(process.execPath, '../../../..', 'dist_electron')}\" \"%1\"` : `${appPath} \"%1\"`

let contextParts = [
    {key: 'command', name: '', value: linkCommand},
    {name: '', value: `Net-Protect 자료 전송`},
    {name: 'Icon', value: `${appPath}`}
]

const fileContextMenu = new ShellOption(`\\Software\\Classes\\*\\shell\\${appName}`, contextParts)
const folderContextMenu = new ShellOption(`\\Software\\Classes\\Directory\\shell\\${appName}`, contextParts)
const folderBackgroundContextMenu = new ShellOption(`\\Software\\Classes\\Directory\\background\\shell\\${appName}`,
  JSON.parse(JSON.stringify(contextParts).replace('%1', '%V'))
)

export default {
  appName,
  fileHandler,
  fileContextMenu,
  folderContextMenu,
  folderBackgroundContextMenu
}
