const isDevelopment = process.env.NODE_ENV !== 'production'

export default class NpGlobalVariable {
  constructor () {
    this.localUrl = 'http://localhost:9080'
    this.trsInnerUrl = 'http://192.168.40.90:9080'
    this.trsOuterUrl = 'http://192.168.30.90:9080'

    this.setGlobalObj()
  }

  setGlobalObj() {
    global.sharedObj = {
      trs_i_url : this.getTrsInnerUrl(),
      trs_o_url : this.getTrsOuterUrl()
    }
  }

  getTrsInnerUrl() {
    return ( isDevelopment ) ? this.localUrl : this.trsInnerUrl
  }

  getTrsOuterUrl() {
    return ( isDevelopment ) ? this.localUrl : this.trsOuterUrl
  }
}
