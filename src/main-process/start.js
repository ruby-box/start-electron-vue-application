import NpApplication from './np-application'

export default function start() {

  process.on('uncaughtException', function (error = {}) {
    if (error.message != null) {
      console.log(error.message)
    }

    if (error.stack != null) {
      console.log(error.stack)
    }
  })

  process.on('unhandledRejection', function (error = {}) {
    if (error.message != null) {
      console.log(error.message)
    }

    if (error.stack != null) {
      console.log(error.stack)
    }
  })

  if (process.platform == 'win32') {
    console.log('start.js args1 => ' + process.argv.slice(1))
  }

  NpApplication.start()

}
