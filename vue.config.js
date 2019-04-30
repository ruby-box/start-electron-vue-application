const path = require('path')

module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': path.resolve('./node_modules/vue/dist/vue.common.js'),
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      //externals: [path.resolve('./node_modules/vue-cli-plugin-electron-builder/lib')]
      //mainProcessFile: 'src/background.js',
      //customFileProtocal: 'netprotect://./',
      //nodeModulesPath: ['../node_modules', './node_modules'],
      builderOptions: {
        appId: "s3i.netprotect.app",
        directories: {
          buildResources : "build"
        },
        files: [
          "**"
          // "./package.json",
          //"./node_modules/**/*"
        ],
        asar: false
        /*
        win: {
          target: "nsis"
        },
        nsis: {
          oneClick: false,
          perMachine: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true
        }*/
      },
      outputDir: 'desktop-for-windows'
    }
  }
}
