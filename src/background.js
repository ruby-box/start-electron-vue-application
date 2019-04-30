'use strict'

const isDevelopment = process.env.NODE_ENV !== 'production'
import path from 'path'

let resourcePath
//if (isDevelopment) {
//  resourcePath = process.env.WEBPACK_DEV_SERVER_URL
//} else {
  //resourcePath = path.dirname(__dirname)
//}

//const start = require(path.join(resourcePath, 'src', 'main-process', 'start'))
import start from './main-process/start'
start()
